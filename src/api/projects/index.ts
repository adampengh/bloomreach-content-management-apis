import axios, { AxiosPromise } from 'axios';

const PROJECTS_API_PATH = 'management/projects/v1';

/**
 * Gets All Developer Projects
 * @category Projects Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} [withSubresources]
 * @example
 * ```ts
 * getAllProjects(environment, xAuthToken, true)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getAllProjects = async (
  environment: string,
  xAuthToken: string,
  withSubresources = false,
): AxiosPromise => {
  const url = `https://${environment}.bloomreach.io/${PROJECTS_API_PATH}?withSubresources=${withSubresources}`;
  const response = await axios(url, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });

  return response;
};

/**
 * Gets a Developer Project by Project ID
 * @category Projects Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} projectId
 * @param {string} [withSubresources]
 * @example
 * ```ts
 * getDeveloperProject(environment, xAuthToken, 'vA1b2', true)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  withSubresources = false,
): AxiosPromise => {
  // eslint-disable-next-line max-len
  const url = `https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}?withSubresources=${withSubresources}`;
  const response = await axios(url, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

/**
 * Creates a Developer Project
 * @category Projects Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} name
 * @param {boolean} [includeContentTypes]
 * @param {string} [description]
 * @example
 * ```ts
 * createDeveloperProject(environment, xAuthToken, 'Development Project', true)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const createDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  name: string,
  includeContentTypes = false,
  description = '',
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: {
      name,
      includeContentTypes,
      description,
    },
  });
  return response;
};

/**
 * Updates a Developer Project
 * @category Projects Management API
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} projectId
 * @param {string} name
 * @param {boolean} [includeContentTypes]
 * @param {string} [description]
 * @example
 * ```ts
 * updateDeveloperProject(environment, xAuthToken, 'vA1b2', 'Development Project', true)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const updateDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  name: string,
  includeContentTypes = false,
  description = '',
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: {
      id: projectId,
      name,
      includeContentTypes,
      description,
    },
  });
  return response;
};

/**
* Merges a developer project.<br/>
* This operation runs ansynchronously and merges the channels, content types, documents, pages and * resource bundles.
* Merge operation pushes the changes to the core project. In case a conflict happens during the merge operation,
* then the operation can be tried again after resolving the conflicts manually. The result of the operation could be
* seen by calling the GET endpoint.<br/>
* Only users with 'Site Admin' role can run the merge operation.
* @category Projects Management API
* @param {string} environment
* @param {string} xAuthToken
* @param {string} projectId
* @param {boolean} [approveAllChanges]
* @example
* ```ts
* mergeDeveloperProject(environment, xAuthToken, 'vA1b2', true)
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const mergeDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  approveAllChanges = false,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}:merge`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: {
      approveAllChanges,
    },
  });
  return response;
};

/**
* Rebases a developer project.<br/>
* This operation runs ansynchronously and rebases the channels. Rebase operation checks whether the upstream channel
* has changes which are not part of the project. Then it pulls the latest changes from the upstream channel and pushes
* them to the project. The result of the operation could be seen by calling the GET endpoint.
* @category Projects Management API
* @param {string} environment
* @param {string} xAuthToken
* @param {string} projectId
* @example
* ```ts
* rebaseDeveloperProject(environment, xAuthToken, 'vA1b2')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const rebaseDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}:rebase`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
  });
  return response;
};

/**
* Reopens a developer project.
* @category Projects Management API
* @param {string} environment
* @param {string} xAuthToken
* @param {string} projectId
* @example
* ```ts
* reopenDeveloperProject(environment, xAuthToken, 'vA1b2')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const reopenDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}:reopen`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
  });
  return response;
};

/**
* Deletes a developer project.
* @category Projects Management API
* @param {string} environment
* @param {string} xAuthToken
* @param {string} projectId
* @example
* ```ts
* deleteDeveloperProject(environment, xAuthToken, 'vA1b2')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const deleteDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}`, {
    method: 'DELETE',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};
