import axios, { AxiosPromise } from 'axios';

const SITE_MANAGEMENT_API_PATH = 'management/site/v1';

/**
 * Get all component groups
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} channelId
 * @returns
 */
export const getAllComponentGroups = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );

  return response;
};

export const getComponentGroup = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  componentGroup: string,
): AxiosPromise => {
  const response = await axios(
    // eslint-disable-next-line max-len
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups/${componentGroup}`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

export const createComponentGroup = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  componentGroup: string,
  data: object,
): AxiosPromise => {
  const response = await axios(
    // eslint-disable-next-line max-len
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups/${componentGroup}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
      },
      data,
    },
  );
  return response;
};

export const deleteComponentGroup = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  componentGroup: string,
): AxiosPromise => {
  const response = await axios(
    // eslint-disable-next-line max-len
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/component_groups/${componentGroup}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
