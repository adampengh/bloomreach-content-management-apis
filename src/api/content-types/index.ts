import axios, { AxiosPromise } from 'axios';

const CONTENT_TYPE_API_PATH = 'management/contenttypes/v1';

/**
 * Get All Content Types
 * @category Content Type Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} [projectId] 'core' or 'development'
 * @example
 * ```ts
 * getAllContentTypes(environment, xAuthToken, 'development')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
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

/**
 * Get a Content Type
 * @category Content Type Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} contentTypeName
 * @param {string} [projectId]
 * @example
 * ```ts
 * getContentType(environment, xAuthToken, 'referencespa:banner', 'development')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
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

/**
 * Create or Update a Content Type
 * @category Content Type Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} contentTypeName
 * @param {object} data
 * @param {string} [optXResourceVersion]
 * @example
 * ```ts
 * putContentType(environment, xAuthToken, 'referencespa:banner', data)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
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

/**
 * Delete a Content Type
 * @category Content Type Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} contentTypeName
 * @example
 * ```ts
 * deleteContentType(environment, xAuthToken, 'referencespa:banner')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const deleteContentType = async (
  environment: string,
  xAuthToken: string,
  contentTypeName: string,
): AxiosPromise => {
  const contentType = contentTypeName.replace(':', '-');
  const url = `https://${environment}.bloomreach.io/${CONTENT_TYPE_API_PATH}/development/${contentType}`;
  const response = await axios(url, {
    method: 'DELETE',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

/**
 * Rename a Content Type
 * @category Content Type Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} contentTypeName
 * @param {string} newName
 * @param {string} displayName
 * @example
* ```ts
* renameContentType(environment, xAuthToken, 'referencespa:banner')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const renameContentType = async (
  environment: string,
  xAuthToken: string,
  contentTypeName: string,
  newName: string,
  displayName: string,
): AxiosPromise => {
  const contentType = contentTypeName.replace(':', '-');
  const url = `https://${environment}.bloomreach.io/${CONTENT_TYPE_API_PATH}/development/${contentType}`;
  const response = await axios(url, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
    },
    data: {
      newName,
      displayName,
    },
  });
  return response;
};
