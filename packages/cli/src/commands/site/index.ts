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

import type { CliCommonArgs } from "@osdk/cli.common";
import { YargsCheckError } from "@osdk/cli.common";
import type { LoadedFoundryConfig } from "@osdk/foundry-config-json";
import type { CommandModule } from "yargs";
import type { ThirdPartyAppRid } from "../../net/ThirdPartyAppRid.js";
import configLoader from "../../util/configLoader.js";
import type { CommonSiteArgs } from "./CommonSiteArgs.js";
import deploy from "./deploy/index.js";
import { logSiteCommandConfigFileOverride } from "./logSiteCommandConfigFileOverride.js";
import version from "./version/index.js";

const command: CommandModule<CliCommonArgs, CommonSiteArgs> = {
  command: "site",
  describe: "Manage your site",
  builder: async (argv) => {
    const config: LoadedFoundryConfig<"site"> | undefined =
      await configLoader();
    const application = config?.foundryConfig.site.application;
    const foundryUrl = config?.foundryConfig.foundryUrl;
    return argv
      .options({
        application: {
          type: "string",
          coerce: (application) => application as ThirdPartyAppRid,
          ...application
            ? { default: application }
            : { demandOption: true },
          description: "Application resource identifier (rid)",
        },
        foundryUrl: {
          coerce: (foundryUrl) => foundryUrl.replace(/\/$/, ""),
          type: "string",
          ...foundryUrl
            ? { default: foundryUrl }
            : { demandOption: true },
          description: "URL for the Foundry stack",
        },
        token: {
          type: "string",
          conflicts: "tokenFile",
          description: "Foundry API token",
        },
        tokenFile: {
          type: "string",
          conflicts: "token",
          description: "Path to file containing Foundry API token",
        },
      })
      .group(
        ["application", "foundryUrl", "token", "tokenFile"],
        "Common Options",
      )
      .command(version)
      .command(deploy)
      .check((args) => {
        if (!args.foundryUrl.startsWith("https://")) {
          throw new YargsCheckError("foundryUrl must start with https://");
        }
        return true;
      })
      .middleware((args) =>
        logSiteCommandConfigFileOverride(args, config?.foundryConfig)
      )
      .demandCommand();
  },
  handler: async (args) => {},
};

export default command;
