/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type {
  GeoFilter_Intersects,
  GeoFilter_Within,
  ObjectOrInterfaceDefinition,
  PossibleWhereClauseFilters,
  WhereClause,
} from "@osdk/api";
import { DistanceUnitMapping } from "@osdk/api";

import type { SearchJsonQueryV2 } from "@osdk/internal.foundry.core";
import type { BBox, Position } from "geojson";
import invariant from "tiny-invariant";

export function extractNamespace(
  fqApiName: string,
): [string | undefined, string] {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}

/** @internal */
export function modernToLegacyWhereClause<
  T extends ObjectOrInterfaceDefinition,
>(
  whereClause: WhereClause<T>,
  objectOrInterface: T,
): SearchJsonQueryV2 {
  if ("$and" in whereClause) {
    return {
      type: "and",
      value: (whereClause.$and as WhereClause<T>[]).map(
        (clause) => modernToLegacyWhereClause(clause, objectOrInterface),
      ),
    };
  } else if ("$or" in whereClause) {
    return {
      type: "or",
      value: (whereClause.$or as WhereClause<T>[]).map(
        (clause) => modernToLegacyWhereClause(clause, objectOrInterface),
      ),
    };
  } else if ("$not" in whereClause) {
    return {
      type: "not",
      value: modernToLegacyWhereClause(
        whereClause.$not as WhereClause<T>,
        objectOrInterface,
      ),
    };
  }

  const parts = Object.entries(whereClause);

  if (parts.length === 1) {
    return handleWherePair(parts[0], objectOrInterface);
  }

  return {
    type: "and",
    value: parts.map<SearchJsonQueryV2>(
      v => handleWherePair(v, objectOrInterface),
    ),
  };
}

function makeGeoFilterBbox(
  field: string,
  bbox: BBox,
  filterType: "$within" | "$intersects",
): SearchJsonQueryV2 {
  return {
    type: filterType === "$within"
      ? "withinBoundingBox"
      : "intersectsBoundingBox",
    field,
    value: {
      topLeft: {
        type: "Point",
        coordinates: [bbox[0], bbox[3]],
      },
      bottomRight: {
        type: "Point",
        coordinates: [bbox[2], bbox[1]],
      },
    },
  };
}

function makeGeoFilterPolygon(
  field: string,
  coordinates: Position[][],
  filterType: "intersectsPolygon" | "withinPolygon",
): SearchJsonQueryV2 {
  return {
    type: filterType,
    field,
    value: {
      type: "Polygon",
      coordinates,
    },
  };
}

function handleWherePair(
  [field, filter]: [string, any],
  objectOrInterface: ObjectOrInterfaceDefinition,
): SearchJsonQueryV2 {
  invariant(
    filter != null,
    "Defined key values are only allowed when they are not undefined.",
  );

  if (
    typeof filter === "string" || typeof filter === "number"
    || typeof filter === "boolean"
  ) {
    if (objectOrInterface.type === "interface") {
      const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
      const [fieldApiNamespace, fieldShortName] = extractNamespace(field);

      if (fieldApiNamespace == null && objApiNamespace != null) {
        field = `${objApiNamespace}.${fieldShortName}`;
      }
    }

    return {
      type: "eq",
      field,
      value: filter,
    };
  }

  const keysOfFilter = Object.keys(filter);

  // If any of the keys start with `$` then they must be the only one.
  // e.g. `where({ name: { $eq: "foo", $ne: "bar" } })` is invalid currently
  const hasDollarSign = keysOfFilter.some((key) => key.startsWith("$"));
  invariant(
    !hasDollarSign
      || keysOfFilter.length === 1,
    "WhereClause Filter with multiple clauses isn't allowed",
  );

  if (!hasDollarSign) {
    // Future case for structs
    throw new Error(
      `Unsupported filter. Did you forget to use a $-prefixed filter? (${
        JSON.stringify(filter)
      })`,
    );
  }

  const firstKey = keysOfFilter[0] as PossibleWhereClauseFilters;
  invariant(filter[firstKey] != null);

  if (firstKey === "$ne") {
    return {
      type: "not",
      value: {
        type: "eq",
        field,
        value: filter[firstKey],
      },
    };
  }

  if (firstKey === "$within") {
    const withinBody = filter[firstKey] as GeoFilter_Within["$within"];

    if (Array.isArray(withinBody)) {
      return makeGeoFilterBbox(field, withinBody, firstKey);
    } else if ("$bbox" in withinBody && withinBody.$bbox != null) {
      return makeGeoFilterBbox(field, withinBody.$bbox, firstKey);
    } else if (
      ("$distance" in withinBody && "$of" in withinBody)
      && withinBody.$distance != null
      && withinBody.$of != null
    ) {
      return {
        type: "withinDistanceOf",
        field,
        value: {
          center: Array.isArray(withinBody.$of)
            ? {
              type: "Point",
              coordinates: withinBody.$of,
            }
            : withinBody.$of,
          distance: {
            value: withinBody.$distance[0],
            unit: DistanceUnitMapping[withinBody.$distance[1]],
          },
        },
      };
    } else {
      const coordinates = ("$polygon" in withinBody)
        ? withinBody.$polygon
        : withinBody.coordinates;
      return makeGeoFilterPolygon(field, coordinates, "withinPolygon");
    }
  }
  if (firstKey === "$intersects") {
    const intersectsBody =
      filter[firstKey] as GeoFilter_Intersects["$intersects"];
    if (Array.isArray(intersectsBody)) {
      return makeGeoFilterBbox(field, intersectsBody, firstKey);
    } else if ("$bbox" in intersectsBody && intersectsBody.$bbox != null) {
      return makeGeoFilterBbox(field, intersectsBody.$bbox, firstKey);
    } else {
      const coordinates = ("$polygon" in intersectsBody)
        ? intersectsBody.$polygon
        : intersectsBody.coordinates;
      return makeGeoFilterPolygon(field, coordinates, "intersectsPolygon");
    }
  }

  if (firstKey === "$containsAllTerms" || firstKey === "$containsAnyTerm") {
    return {
      type: firstKey.substring(1) as DropDollarSign<typeof firstKey>,
      field,
      value: typeof filter[firstKey] === "string"
        ? filter[firstKey]
        : filter[firstKey]["term"],
      fuzzy: typeof filter[firstKey] === "string"
        ? false
        : filter[firstKey]["fuzzySearch"] ?? false,
    };
  }

  return {
    type: firstKey.substring(1) as DropDollarSign<typeof firstKey>,
    field,
    value: filter[firstKey] as any,
  };
}

type DropDollarSign<T extends `$${string}`> = T extends `$${infer U}` ? U
  : never;
