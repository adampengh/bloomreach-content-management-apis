import axios, { AxiosPromise } from 'axios';
import { CONSTANTS } from '../constants';

/**
 * Get operation details<br/>
 * Get the details of an operation. Useful to keep track of all the batch requests.
 * @group Content Batch Import
 * @param environment
 * @param xAuthToken
 * @param operationId
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * getImportOperationStatu(environment, xAuthToken, 'b7e8c433-ee81-4aef-b904-83c4d12a4bd3')
 *  .then(response => console.log(response.data))
 *  .catch(error => console.error(error));
 * ```
 */
export const getImportOperationStatus = async (
  environment: string,
  xAuthToken: string,
  operationId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONSTANTS.IMPORT_API_PATH}/operations/${operationId}`,
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
 * List all operations
 * @group Content Batch Import
 * @param environment
 * @param xAuthToken
 * @returns {AxiosPromise}
 * @example
* ```ts
* listImportOperations(environment, xAuthToken)
*  .then(response => console.log(response.data))
*  .catch(error => console.error(error));
* ```
*/
export const listImportOperations = async (
  environment: string,
  xAuthToken: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${CONSTANTS.IMPORT_API_PATH}/operations`, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

/**
 * Create content (documents and pages) in a specific project.
 * @group Content Batch Import
 * @param environment
 * @param xAuthToken
 * @param projectId
 * @param file
 * @returns {AxiosPromise}
 * @example
* ```ts
* createImportJob(environment, xAuthToken, 'vA1b2', file)
*  .then(response => console.log(response.data))
*  .catch(error => console.error(error));
* ```
*/
export const createImportJob = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  file: File,
): AxiosPromise => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(
    `https://${environment}.bloomreach.io/${CONSTANTS.IMPORT_API_PATH}/project/${projectId}`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
        'x-auth-token': xAuthToken,
      },
    },
  );

  return response;
};
