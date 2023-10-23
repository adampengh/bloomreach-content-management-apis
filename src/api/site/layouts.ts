import axios, { AxiosPromise } from 'axios';

const SITE_MANAGEMENT_API_PATH = 'management/site/v1';

/**
 * @category Site Management API
 * @group Layouts
 * @param environment
 * @param xAuthToken
 * @param channelId
 */
export const getAllLayouts = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/layouts`,
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
 * @group Layouts
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param layout
 */
export const getLayout = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  layout: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/layouts/${layout}`,
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
 * @group Layouts
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param layout
 * @param data
 * @param [optXResourceVersion]
 */
export const putLayout = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  layout: string,
  data: object,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/layouts/${layout}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        ...(optXResourceVersion && { 'x-resource-version': optXResourceVersion }),
      },
      data,
    },
  );
  return response;
};

/**
 * @category Site Management API
 * @group Layouts
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param layout
 */
export const deleteLayout = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  layout: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/layouts/${layout}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
