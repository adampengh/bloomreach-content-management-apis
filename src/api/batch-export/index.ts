import axios, { AxiosPromise } from 'axios';

const EXPORT_API_PATH = 'management/content-export/v1';

/**
 * @category Content Batch Export API
 * @param environment
 * @param xAuthToken
 * @param sourcePath
 * @param modifiedAfter
 * @param projectId
 * @param dataTypes
 */
export const requestAnExport = async (
  environment: string,
  xAuthToken: string,
  sourcePath: string,
  modifiedAfter: string,
  projectId = 'core',
  dataTypes = ['resourcebundle', 'page', 'resourcebundle', 'folder'],
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${EXPORT_API_PATH}/`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
    },
    data: {
      dataTypes,
      sourcePath,
      branch: projectId,
      ...(modifiedAfter ? { modifiedAfter } : {}),
    },
  });
  return response;
};

/**
 * @category Content Batch Export API
 * @param environment
 * @param xAuthToken
 * @param operationId
 */
export const getOperationDetails = async (
  environment: string,
  xAuthToken: string,
  operationId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${EXPORT_API_PATH}/operations/${operationId}`, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

/**
 * @category Content Batch Export API
 * @param environment
 * @param xAuthToken
 * @param operationId
 */
export const downloadExportedFiles = async (
  environment: string,
  xAuthToken: string,
  operationId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${EXPORT_API_PATH}/operations/${operationId}/files`,
    {
      method: 'GET',
      responseType: 'arraybuffer',
      headers: {
        'x-auth-token': xAuthToken,
        accept: 'application/octet-stream',
      },
    },
  );
  return response;
};
