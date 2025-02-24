/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { ObjectTypeDisplayMetadata } from "./ObjectTypeDisplayMetadata.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrObjectTypeInterfaceImplementation } from "./OntologyIrObjectTypeInterfaceImplementation.js";
import type { OntologyIrObjectTypeStatus } from "./OntologyIrObjectTypeStatus.js";
import type { OntologyIrPropertyType } from "./OntologyIrPropertyType.js";

/**
 * An ObjectType is a model that represents a real world concept. For example, there could be
 * an Employees ObjectType to represent the employees in a business organization.
 */
export interface OntologyIrObjectType {
  displayMetadata: ObjectTypeDisplayMetadata;
  primaryKeys: Array<ObjectTypeFieldApiName>;
  propertyTypes: Record<ObjectTypeFieldApiName, OntologyIrPropertyType>;
  titlePropertyTypeRid: ObjectTypeFieldApiName;
  apiName: ObjectTypeApiName | undefined;
  status: OntologyIrObjectTypeStatus;
  redacted: boolean | undefined;
  implementsInterfaces2: Array<OntologyIrObjectTypeInterfaceImplementation>;
  allImplementsInterfaces: Record<
    InterfaceTypeApiName,
    OntologyIrObjectTypeInterfaceImplementation
  >;
}
