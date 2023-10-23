import axios, { AxiosPromise } from 'axios';

const EXPORT_API_PATH = 'management/content-import/v1';

/**
 * @category Content Batch Import API
 * @param environment
 * @param xAuthToken
 * @param operationId
 */
export const getImportOperationStatus = async (
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
