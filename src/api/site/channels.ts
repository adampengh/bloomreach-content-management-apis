import axios, { AxiosPromise } from 'axios';

const CHANNEL_API_PATH = 'management/site/v1';
const DELIVERY_CHANNEL_API_PATH = 'delivery/site/v1';

/**
 * Get all core channels from Delivery API
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @returns
 * @example
 * ```ts
 * getAllCoreChannels(environment)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getAllCoreChannels = async (environment: string): AxiosPromise => {
  const url = `https://${environment}.bloomreach.io/${DELIVERY_CHANNEL_API_PATH}/channels`;
  const response = await axios(url, {
    method: 'GET',
  });
  return response;
};

/**
 * Get all channels
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @returns
 */
export const getAllChannels = async (
  environment: string,
  xAuthToken: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Get all channel groups
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @returns
 */
export const getChannelGroups = async (
  environment: string,
  xAuthToken: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channelgroups`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Get channel
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @returns
 */
export const getChannel = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
):AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Put channel
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @param {object} data
 * @param {string=} opt_xResourceVersion
 * @returns
 */
export const putChannel = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  data: any,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(optXResourceVersion && {
          'x-resource-version': optXResourceVersion,
        }),
      },
      data,
    },
  );
  return response;
};

/**
 * Add channel to project
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} projectId
 * @param {string} channelId
 * @returns
 */
export const addChannelToProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels`,
    {
      method: 'POST',
      headers: {
        'x-auth-token': xAuthToken,
      },
      data: {
        branch: projectId,
        branchOf: channelId,
      },
    },
  );
  return response;
};

/**
 * Deletes a channel branch
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @returns
 */
export const deleteChannelBranch = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Get channel fieldgroups
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @returns
 */
export const getChannelFieldGroups = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}/fieldgroups`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Put channel fieldgroups
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @param {string} fieldGroup
 * @param {object} data
 * @param {string} [optXResourceVersion]
 * @returns
 */
export const putChannelFieldGroups = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  fieldGroup: string,
  data: any,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}/fieldgroups/${fieldGroup}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(optXResourceVersion && { 'x-resource-version': optXResourceVersion }),
      },
      data,
    },
  );
  return response;
};

/**
 * Delete channel fieldgroups
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @param {string} fieldGroup
 * @returns
 */
export const deleteChannelFieldGroups = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  fieldGroup: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}/fieldgroups/${fieldGroup}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Get channel parameters
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @returns
 */
export const getChannelParameters = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}/parameters`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Get channel parameter
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @param {string} parameter
 * @returns
 */
export const getChannelParameter = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  parameter: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}/parameters/${parameter}`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

/**
 * Put channel parameter
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @param {string} parameter
 * @param {object} data
 * @param {string} [optXResourceVersion]
 * @returns
 */
export const putChannelParameter = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  parameter: string,
  data: object,
  optXResourceVersion: string,
): AxiosPromise => {
  /** Sample data
   *
    {
      "name": "smAccountId",
      "valueType": "string",
      "required": true,
      "hidden": false,
      "overlay": false,
      "defaultValue": "",
      "displayName": "brSM Account ID RENAMED",
      "system": false,
      "config": null
    }
   */

  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}/parameters/${parameter}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(optXResourceVersion && {
          'x-resource-version': optXResourceVersion,
        }),
      },
      data,
    },
  );
  return response;
};

/**
 * Delete channel parameter
 * @group Site Management
 * @category Channel
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @param {string} parameter
 * @returns
 */
export const deleteChannelParameter = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  parameter: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CHANNEL_API_PATH}/channels/${channelId}/parameters/${parameter}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
