import axios, { AxiosPromise } from 'axios';

const CONTENT_API_PATH = 'management/content/v1';

/**
 * Get a resource bundle in a specific project.<br/>
 * Resource bundles are also documents which are collections of key message pairs. The locale specific
 * messages can be defined in a single structure. The projects are supported on resource bundles.<br/>
 * Resource bundles are mostly defined with the locale based value sets. The value sets are not restricted to
 * use with locales only though. Any other grouping can also be defined with a resource bundle document.
 * The design also supports custom value sets apart from locales.</br>
 * A Resource bundle in core may be have changes that aren't yet published, these are stored in a separate
 * variant of the bundle (the 'unpublished' variant). When requesting a bundle for core, the 'published' variant
 * is retrieved, unless there is none (the bundle has never been published yet), in which case the unpublished
 * variant is fetched.
 * @category Content Management API
 * @group Resource Bundle
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} path Path of a resource bundle. This is the absolute path to the resource bundle,
 * including the resource bundle name
 * @param {string} projectId Specifies the project content is fetched from
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * getResourceBundle(environment, xAuthToken, 'vA1b2', '/content/documents/administration/categories')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getResourceBundle = async (
  environment: string,
  xAuthToken: string,
  path: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/resourcebundles/${path}`,
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
 * Create or update a resource bundle in a specific project
 * @category Content Management API
 * @group Resource Bundle
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} projectId Specifies the project content is added to
 * @param {string} path Path of a resource bundle. This is the absolute path to the resource bundle,
 * including the resource bundle name
 * @param {object} data
 * @param [xResourceVersion] Resource's version, as obtained when GETting the resource. The first time a resource
 * is created, a empty value is expected (omit the header). Must be used in any subsequent update requests of
 * this resource
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * putResourceBundle(environment, xAuthToken, 'vA1b2', '/content/documents/administration/categories', data)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const putResourceBundle = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  path: string,
  data: Document,
  xResourceVersion?: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/resourcebundles/${path}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(xResourceVersion && { 'x-resource-version': xResourceVersion }),
      },
      data,
    },
  );
  return response;
};

/**
 * Dissociate a resource bundle from a project. (The project has to be in unaccepted state.)
 * @category Content Management API
 * @group Resource Bundle
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} projectId Specifies the project resource bundle is dissociated to
 * @param {string} path Path of a resource bundle. This is the absolute path to the resource bundle,
 * including the resource bundle name
 * @returns {AxiosPromise}
 * @example
* ```ts
* removeResourceBundleFromProject(environment, xAuthToken, 'vA1b2', '/content/documents/administration/categories')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const removeResourceBundleFromProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  path: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/resourcebundles/${path}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
