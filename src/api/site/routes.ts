import axios, { AxiosPromise } from 'axios';

const SITE_MANAGEMENT_API_PATH = 'management/site/v1';

/**
 * @category Site Management API
 * @group Routes
 * @param environment
 * @param xAuthToken
 * @param channelId
 */
export const getAllRoutes = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/routes`,
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
 * @group Routes
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param route
 */
export const getRoute = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  route: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/routes/${route}`,
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
 * @group Routes
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param route
 * @param data
 * @param [optXResourceVersion]
 */
export const putRoute = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  route: string,
  data: object,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/routes/${route}`,
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
 * @group Routes
 * @param environment
 * @param xAuthToken
 * @param channelId
 * @param route
 */
export const deleteRoute = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  route: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/routes/${route}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
