import axios, { AxiosPromise } from 'axios';

const FOLDER_API_PATH = 'management/folder/v1';

/**
 * Get a Folder
 * @category Folder Management API
 * @param environment
 * @param xAuthToken
 * @param folderPath
 * @param [depth]
 */
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

/**
 * Create or Update a Folder
 * @category Folder Management API
 * @param environment
 * @param xAuthToken
 * @param folderType
 * @param folderPath
 * @param displayName
 * @param [allowedDocumentTypes]
 * @param [allowedFolderTypes]
 */
export const createOrUpdateFolder = async (
  environment: string,
  xAuthToken: string,
  folderType: string,
  folderPath: string,
  displayName: string,
  allowedDocumentTypes = ['ALL_DOCUMENTS'],
  allowedFolderTypes = ['FOLDER'],
): AxiosPromise => {
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

/**
 * Delete a Folder
 * @category Folder Management API
 * @param environment
 * @param xAuthToken
 * @param folderPath
 */
export const deleteFolder = async (
  environment: string,
  xAuthToken: string,
  folderPath: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${FOLDER_API_PATH}/${folderPath}`, {
    method: 'DELETE',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

/**
 * Move or Rename a Folder
 * @category Folder Management API
 * @param environment
 * @param xAuthToken
 * @param folderPath
 * @param dstFolderPath
 */
export const moveOrRenameFolder = async (
  environment: string,
  xAuthToken: string,
  folderPath: string,
  dstFolderPath: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${FOLDER_API_PATH}/move`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
    },
    data: {
      srcPath: folderPath,
      dstPath: dstFolderPath,
    },
  });
  return response;
};
