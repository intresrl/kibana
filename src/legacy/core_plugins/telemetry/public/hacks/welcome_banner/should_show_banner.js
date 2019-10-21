/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { handleOldSettings } from './handle_old_settings';

/**
 * Determine if the banner should be displayed.
 *
 * This method can have side-effects related to deprecated config settings.
 *
 * @param {Object} config The advanced settings config object.
 * @param {Object} _handleOldSettings handleOldSettings function, but overridable for tests.
 * @return {Boolean} {@code true} if the banner should be displayed. {@code false} otherwise.
 */
export async function shouldShowBanner(telemetryOptInProvider, config, { _handleOldSettings = handleOldSettings } = {}) {
  return telemetryOptInProvider.getOptIn() === null && await _handleOldSettings(config, telemetryOptInProvider);
}
