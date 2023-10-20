import axios, { AxiosPromise } from 'axios';

const CONTENT_API_PATH = 'management/content/v1';

export const getPage = async (
  environment: string,
  xAuthToken: string,
  channel: string,
  path: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/channel/${channel}/page/${path}`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};

export const putPage = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  channel: string,
  path: string,
  pageData: any,
  optXResourceVersion: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/channel/${channel}/page/${path}`,
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
      data: pageData,
    },
  );
  return response;
};
