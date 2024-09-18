import axios, { AxiosPromise } from 'axios';
import { Page } from '@/types';

const CONTENT_API_PATH = 'management/content/v1';

/**
 * Get a page in a specific project.<br>
 * A page in core may be have changes that aren't yet published, these are stored in a separate variant of the page
 * (the 'unpublished' variant). When requesting a page for core, the 'published' variant is retrieved, unless there is
 * none (the page has never been published yet), in which case the unpublished variant is fetched.
 * @category Page
 * @group Content Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} channel Specifies the channel this page is associated with
 * @param {string} path Relative path of page. It is appended to the content root path of the given channel
 * @param {string} projectId Specifies the project content is fetched from
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * getPage(environment, xAuthToken, 'vA1b2', 'pages/home', 'reference-spa')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
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

/**
 * Create or update a page in a specific project and channel
 * @category Page
 * @group Content Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} projectId Specifies the project content is added to
 * @param {string} channel Specifies the channel this page is associated with
 * @param {string} path Relative path of page. It is appended to the content root path of the given channel.
 * Folders appearing in this path need to preexist
 * @param {object} pageData
 * @param [xResourceVersion] Resource's version, as obtained when GETting the resource. The first time a resource
 * is created, a empty value is expected (omit the header). Must be used in any subsequent update requests of
 * this resource
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * putPage(environment, xAuthToken, 'vA1b2', 'reference-spa', 'pages/home', pageData)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const putPage = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  channel: string,
  path: string,
  pageData: Page,
  xResourceVersion?: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/channel/${channel}/page/${path}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(xResourceVersion && { 'x-resource-version': xResourceVersion }),
      },
      data: pageData,
    },
  );
  return response;
};

/**
 * Dissociate an experience page from a project. (The project has to be in unaccepted state.)
 * @category Page
 * @group Content Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} projectId Specifies the project content is dissociated to
 * @param {string} channel Specifies the channel this page is dissociated with
 * @param {string} path Relative path of page. It is appended to the content root path of the given channel
 * @returns {AxiosPromise}
 * @example
* ```ts
* removePageFromProject(environment, xAuthToken, 'vA1b2', 'reference-spa', 'pages/home')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const removePageFromProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  channel: string,
  path: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/channel/${channel}/page/${path}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
