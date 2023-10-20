import axios, { AxiosPromise } from 'axios';

const FOLDER_API_PATH = 'management/folder/v1';

export const getFolder = async (
  environment: string,
  xAuthToken: string,
  folderPath: string,
  depth = '5',
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${FOLDER_API_PATH}/${folderPath}?depth=${depth}`, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

export const createOrUpdateFolder = async (
  environment: string,
  xAuthToken: string,
  folderType: string,
  folderPath: string,
  displayName: string,
  optAllowedDocumentTypes: Array<string>,
  optAllowedFolderTypes: Array<string>,
): AxiosPromise => {
  const allowedDocumentTypes = optAllowedDocumentTypes || ['ALL_DOCUMENTS'];
  const allowedFolderTypes = optAllowedFolderTypes || ['FOLDER'];

  const response = await axios(`https://${environment}.bloomreach.io/${FOLDER_API_PATH}/${folderPath}`, {
    method: 'PUT',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: {
      type: folderType,
      path: folderPath,
      displayName,
      allowedDocumentTypes,
      allowedFolderTypes,
    },
  });

  return response;
};
