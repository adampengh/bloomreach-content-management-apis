import axios, { AxiosPromise } from 'axios';

const CONTENT_API_PATH = 'management/content/v1';

/**
 * Get a document from a specific project. Documents with state unpublished will be retrieved.<br/>
 * Only documents that have been previously added to a project will show on the response. Check how to
 * make changes to channels and content in a Project.<br/>
 * A document in core may be have changes that aren't yet published, these are stored in a separate variant
 * of the document (the 'unpublished' variant). When requesting a document for core, the 'published' variant is
 * retrieved, unless there is none (the page has never been published yet), in which case the unpublished
 * variant is fetched.
 * @category Content Management API
 * @group Document
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} path Path of a document. This is the absolute path to the document, including the document name
 * @param {string} projectId Specifies the project content is fetched from
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * getPage(environment, xAuthToken, 'vA1b2', 'pages/home', 'reference-spa')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getDocument = async (
  environment: string,
  xAuthToken: string,
  path: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/document/${path}`,
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
 * Create or update a document in a specific project.<br/>
 * The document will be created with state unpublished. To make changes available on the live website,
 * it's necessary to merge the project.
 * @category Content Management API
 * @group Document
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} projectId Specifies the project content is added to
 * @param {string} path Relative path of page. It is appended to the content root path of the given channel.
 * Folders appearing in this path need to preexist
 * @param {object} documentData
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
export const putDocument = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  path: string,
  documentData: Document,
  xResourceVersion?: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/document/${path}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(xResourceVersion && { 'x-resource-version': xResourceVersion }),
      },
      data: documentData,
    },
  );
  return response;
};

/**
 * Dissociate an document from a project. (The project has to be in unaccepted state.)
 * @category Content Management API
 * @group Document
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} projectId Specifies the project document is dissociated to
 * @param {string} path Relative path of document. It is appended to the content root path of the given channel
 * @returns {AxiosPromise}
 * @example
* ```ts
* removePageFromProject(environment, xAuthToken, 'vA1b2', 'reference-spa', 'pages/home')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const removeDocumentFromProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  path: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/project/${projectId}/document/${path}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
