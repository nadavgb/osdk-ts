/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { expect, test } from "vitest";
import { generateFoundryConfigJson } from "./generateFoundryConfigJson.js";

const expected = `
{
  "foundryUrl": "https://example.palantirfoundry.com",
  "widgetSet": {
    "rid": "ri.widgetregistry..widget-set.fake",
    "directory": "./dist",
    "autoVersion": {
      "type": "git-describe",
      "tagPrefix": ""
    }
  }
}
`.trimStart();

test("it generates foundry.config.json", () => {
  expect(
    generateFoundryConfigJson({
      foundryUrl: "https://example.palantirfoundry.com",
      widgetSetRid: "ri.widgetregistry..widget-set.fake",
      directory: "./dist",
    }),
  ).toEqual(expected);
});
