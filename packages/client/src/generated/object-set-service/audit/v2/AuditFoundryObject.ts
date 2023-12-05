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

import type { ObjectPrimaryKeyV2 } from "../../api/ObjectPrimaryKeyV2.js";
import type { ObjectRid } from "../../api/ObjectRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { ObjectVersion } from "../../api/ObjectVersion.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { PropertyValue } from "../../api/PropertyValue.js";

export interface AuditFoundryObject {
  objectRid: ObjectRid | undefined;
  objectTypeRid: ObjectTypeRid;
  primaryKey: ObjectPrimaryKeyV2;
  additionalObjectProperties: Map<PropertyTypeRid, PropertyValue> | undefined;
  version: ObjectVersion;
}
