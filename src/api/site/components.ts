import axios, { AxiosPromise } from 'axios';

const SITE_MANAGEMENT_API_PATH = 'management/site/v1';

/**
 * @category Site Management API
 * @group Components
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param componentGroup
 */
export const getAllComponents = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  componentGroup: string,
): AxiosPromise => {
  const response = await axios(
    // eslint-disable-next-line max-len
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups/${componentGroup}/components/`,
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
 * @category Site Management API
 * @group Components
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param componentGroup
 * @param componentName
 */
export const getComponent = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  componentGroup: string,
  componentName: string,
): AxiosPromise => {
  const response = await axios(
    // eslint-disable-next-line max-len
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups/${componentGroup}/components/${componentName}`,
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
 * @category Site Management API
 * @group Components
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param componentGroup
 * @param componentName
 * @param data
 * @param [optXResourceVersion]
 */
export const putComponent = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  componentGroup: string,
  componentName: string,
  data: object,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    // eslint-disable-next-line max-len
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups/${componentGroup}/components/${componentName}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
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
 * @category Site Management API
 * @group Components
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param componentGroup
 * @param componentName
 */
export const deleteComponent = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  componentGroup: string,
  componentName: string,
): AxiosPromise => {
  const response = await axios(
    // eslint-disable-next-line max-len
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups/${componentGroup}/components/${componentName}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
