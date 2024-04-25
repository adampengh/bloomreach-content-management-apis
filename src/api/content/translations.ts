import axios, { AxiosPromise } from 'axios';

const CONTENT_API_PATH = 'management/content/v1';

/**
 * Get the translations of a document, page, or folder in a channel. Translations of the content item are looked
 * up in the other channels of the same translation channel group.<br/><br/>
 * When requesting a folder, translations of the 1st level children (documents, pagers, folders) of the folder
 * can be requested via parameter.<br/><br/>
 * When requesting content, translation suggestions for the content can be requested via parameter. The suggestions
 * are based on the relative path of the content. The relative content path is looked up in the other channels of
 * the same channel group. If any content items in the other channels match the given relative path,
 * then they are proposed as translation suggestions.
 * @category Content Management API
 * @group Translations
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} path Path of the content. This is the absolute path to the content, including the content name
 * @param {boolean} [includeDocuments] whether to include the translations of the 1st level children
 * (documents, pages, folders) of the folder in case the content is a folder
 * @param {string} [status] to filter the translations by their status. options are
 * 'linked' (show only existing translations),
 * 'suggested' (show only translation suggestions),
 * 'all' (show both existing translations and translation suggestions)
 * @param {string} [view] whether the response payload should have a detailed view of the translations. options are
 * 'detailed' (show extra information such as the type, locale and status of the content),
 * 'simple' (works only when status is selected as 'suggested', shows the list of translations suggestions
 * only with their paths that can be copy/pasted to link service as a request)
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * getTranslations(environment, xAuthToken, '/content/documents/english/banners/banner-a', true, 'all', 'detailed')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getTranslations = async (
  environment: string,
  xAuthToken: string,
  path: string,
  includeDocuments = false,
  status = 'linked',
  view = 'simple',
): AxiosPromise => {
  let params = '?';
  params += includeDocuments ? 'includeDocuments=true' : '';
  params += status ? `&status=${status}` : '';
  params += view ? `&view=${view}` : '';

  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/translation/${path}${params}`,
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
 * Links the given source and target content as translations of each other.
 * @category Content Management API
 * @group Translations
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {object} data
 * @param {boolean} [overrideExistingTranslations]
 * @returns {AxiosPromise}
 * @example
* ```ts
* const data = {
*   path: "/content/documents/english/banners/banner-a",
*   translations: [
*     "/content/documents/french/banners/banner-a",
*     "/content/documents/german/banners/banner-a"
*   ]
* };
*
* translationLink(environment, xAuthToken, data, true)
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const translationLink = async (
  environment: string,
  xAuthToken: string,
  data: object,
  overrideExistingTranslations = false,
): AxiosPromise => {
  let params = '?';
  params += overrideExistingTranslations ? 'overrideExistingTranslations=true' : '';

  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/translation/link${params}`,
    {
      method: 'POST',
      headers: {
        'x-auth-token': xAuthToken,
      },
      data,
    },
  );
  return response;
};

/**
 * Unlink the content from any existing translations
 * Unlinks the given content from any existing translations. This operations runs asynchronously.
 * For the given content:<br/>
 *   • Content must be part of a translation group<br/>
 *   • Content must be under the folder '/content/documents'
 * @category Content Management API
 * @group Translations
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {Array<string>} data
 * @returns {AxiosPromise}
 * @example
* ```ts
* const data = [
*   "/content/documents/french/banners/banner-a",
*   "/content/documents/german/banners/banner-a"
* ];
*
* translationUnlink(environment, xAuthToken, data)
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const translationUnlink = async (
  environment: string,
  xAuthToken: string,
  data: Array<string>,
): AxiosPromise => {
  console.log('bloomreach-content-management-api: translationUnlink data', data);

  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/translation/unlink`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        'x-auth-token': xAuthToken,
      },
      data,
    },
  );
  return response;
};

/**
 * Get the status of a link/unlink operation
 * Get the status of a link/unlink operation which shows information such as operation result,
 * number of processed content items, number of failed operations, start time, end time, and error logs.
 * @category Content Management API
 * @group Translations
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} operationId
 * @returns {AxiosPromise}
 * @example
* ```ts
* getTranslationOperationStatus(environment, xAuthToken, 'b7e8c433-ee81-4aef-b904-83c4d12a4bd3')
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const getTranslationOperationStatus = async (
  environment: string,
  xAuthToken: string,
  operationId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONTENT_API_PATH}/translation/operations/${operationId}`,
    {
      method: 'GET',
      headers: {
        'x-auth-token': xAuthToken,
      },
    },
  );
  return response;
};
