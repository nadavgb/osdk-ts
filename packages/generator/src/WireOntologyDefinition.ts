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

import type * as gateway from "@osdk/gateway";

export interface WireOntologyDefinition {
  rid: string;
  apiName: string;
  description?: string;
  objectTypes: { [key: string]: gateway.components.ObjectTypeV2 };
  actionTypes: gateway.components.ActionTypeV2[];
  queryTypes: gateway.components.QueryTypeV2[];
  linkTypes: Record<string, gateway.components.LinkTypeSideV2[]>;
}
