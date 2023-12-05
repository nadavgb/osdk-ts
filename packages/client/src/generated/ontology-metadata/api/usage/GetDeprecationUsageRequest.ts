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

import type { Backend } from "./Backend.js";
import type { DeprecationOntologyEntityIdentifier } from "./DeprecationOntologyEntityIdentifier.js";
import type { EndpointStatus } from "./EndpointStatus.js";
import type { OriginResourceChain } from "./OriginResourceChain.js";
import type { UserAgent } from "./UserAgent.js";

/**
 * Request to get deprecation usage aggregations. Optionally over a date range specified by startDay and endDay.
 * Can be further filtered down by providing sets of UserAgents, OriginResources, Backends and EndpointStatuses.
 */
export interface GetDeprecationUsageRequest {
  ontologyEntity: DeprecationOntologyEntityIdentifier;
  startDay: string | undefined;
  endDay: string | undefined;
  userAgents: Array<UserAgent>;
  endpointStatus: Array<EndpointStatus>;
  originResourceChains: Array<OriginResourceChain>;
  backends: Array<Backend>;
}
