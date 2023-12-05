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
import type { DeprecationUsage } from "./DeprecationUsage.js";
import type { DeprecationUsageByOriginResourceChain } from "./DeprecationUsageByOriginResourceChain.js";
import type { UserAgent } from "./UserAgent.js";

/**
 * Response to GetDeprecatedUsageRequest. Contains the aggregated results bucketed by day, UserAgent, Backend
 * and OriginResourceChain.
 */
export interface GetDeprecationUsageResponse {
  usageByEndpointStatus: DeprecationUsage;
  usageByDay: Map<string, DeprecationUsage>;
  usageByUserAgent: Map<UserAgent, DeprecationUsage>;
  usageByBackend: Map<Backend, DeprecationUsage>;
  usageByOriginResourceChain: Array<DeprecationUsageByOriginResourceChain>;
}
