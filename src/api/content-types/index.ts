import axios, { AxiosPromise } from 'axios';

const CONTENT_TYPE_API_PATH = 'management/contenttypes/v1';

export const getAllContentTypes = async (
  environment: string,
  xAuthToken: string,
  projectId = 'development',
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${CONTENT_TYPE_API_PATH}/${projectId}`, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

export const getContentType = async (
  environment: string,
  xAuthToken: string,
  contentTypeName: string,
  projectId = 'development',
): AxiosPromise => {
  const contentType = contentTypeName.replace(':', '-');
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_TYPE_API_PATH}/${projectId}/${contentType}`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

export const putContentType = async (
  environment: string,
  xAuthToken: string,
  contentTypeName: string,
  data: any,
  optXResourceVersion: string,
): AxiosPromise => {
  const contentType = contentTypeName.replace(':', '-');
  const url = `https://${environment}.bloomreach.io/${CONTENT_TYPE_API_PATH}/development/${contentType}`;
  const response = await axios(url, {
    method: 'PUT',
    headers: {
      'x-auth-token': xAuthToken,
      accept: 'application/json',
      'content-type': 'application/json',
      ...(optXResourceVersion && { 'x-resource-version': optXResourceVersion }),
    },
    data,
  });
  return response;
};

export const deleteContentType = async (
  environment: string,
  xAuthToken: string,
  contentType: string,
): AxiosPromise => {
  contentType = contentType.replace(':', '-');
  const response = await axios(`/api/contenttypes/${contentType}?environment=${environment}`, {
    method: 'DELETE',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};
