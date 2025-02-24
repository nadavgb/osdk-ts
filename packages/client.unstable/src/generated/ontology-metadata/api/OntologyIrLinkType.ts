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

import type { LinkTypeId } from "./LinkTypeId.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { LinkTypeStatus } from "./LinkTypeStatus.js";
import type { OntologyIrLinkDefinition } from "./OntologyIrLinkDefinition.js";

/**
 * LinkType(s) are models for relationships between ObjectType(s).
 */
export interface OntologyIrLinkType {
  definition: OntologyIrLinkDefinition;
  id: LinkTypeId;
  rid: LinkTypeRid;
  status: LinkTypeStatus;
  redacted: boolean | undefined;
}
