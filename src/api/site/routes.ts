import axios, { AxiosPromise } from 'axios';

const SITE_MANAGEMENT_API_PATH = 'management/site/v1';

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
