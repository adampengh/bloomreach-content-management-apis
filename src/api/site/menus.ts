import axios, { AxiosPromise } from 'axios';

const SITE_MANAGEMENT_API_PATH = 'management/site/v1';

export const getAllMenus = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

export const getMenu = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  menu: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus/${menu}`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

export const putMenu = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  menu: string,
  data: object,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus/${menu}`,
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

export const getMenuItems = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  menu: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus/${menu}/items`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

export const putMenuItems = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  menu: string,
  data: object,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus/${menu}/items`,
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

export const getMenuProperties = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  menu: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus/${menu}/properties`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

export const putMenuProperties = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  menu: string,
  data: object,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus/${menu}/properties`,
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

export const deleteMenu = async (
  environment: string,
  xAuthToken: string,
  channelId: string,
  menu: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${SITE_MANAGEMENT_API_PATH}/channels/${channelId}/menus/${menu}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );

  return response;
};
