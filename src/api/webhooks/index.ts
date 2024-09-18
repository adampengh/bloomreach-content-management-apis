import axios, { AxiosPromise } from 'axios';
import { CONSTANTS } from '../constants';
import { WebhookConfiguration } from '@/types';

/**
 * Gets All Webhook Configurations
 * @group Webhook Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * getAllWebhookConfigurations(environment, xAuthToken)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getAllWebhookConfigurations = async (
  environment: string,
  xAuthToken: string,
): AxiosPromise => {
  const url = `https://${environment}.bloomreach.io/${CONSTANTS.WEBHOOKS_API_PATH}/configurations`;
  const response = await axios(url, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });

  return response;
};

/**
 * Gets a Webhook Configuration by Webhook ID
 * @group Webhook Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} webhookConfigurationId Webhook Configuration ID
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * getWebhookConfiguration(environment, xAuthToken, webhookConfigurationId)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getWebhookConfiguration = async (
  environment: string,
  xAuthToken: string,
  webhookConfigurationId: string,
): AxiosPromise => {
  // eslint-disable-next-line max-len
  const url = `https://${environment}.bloomreach.io/${CONSTANTS.WEBHOOKS_API_PATH}/configurations/${webhookConfigurationId}`;
  const response = await axios(url, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

/**
 * Creates a Webhook Configuration
 * @group Webhook Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {WebhookConfiguration} configuration Webhook Configuration Data
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * createWebhookConfiguration(environment, xAuthToken, 'Webhook Example', true,
 *    'https://example.com/api/webhooks', 'POST', ['document:publish'])
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const createWebhookConfiguration = async (
  environment: string,
  xAuthToken: string,
  configuration: WebhookConfiguration,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${CONSTANTS.WEBHOOKS_API_PATH}/configurations`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: configuration,
  });
  return response;
};

/**
 * Updates a Webhook Configuration
 * @group Webhook Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} webhookConfigurationId Webhook Configuration ID
 * @param {WebhookConfiguration} configuration Webhook Configuration
 * @param [optXResourceVersion]
 * @returns {AxiosPromise}
 * @example
 * ```ts
 * updateWebhookConfiguration(environment, xAuthToken, webhookConfigurationId, data)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const updateWebhookConfiguration = async (
  environment: string,
  xAuthToken: string,
  webhookConfigurationId: string,
  configuration: WebhookConfiguration,
  optXResourceVersion?: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONSTANTS.WEBHOOKS_API_PATH}/configurations/${webhookConfigurationId}`,
    {
      method: 'PUT',
      headers: {
        'x-auth-token': xAuthToken,
        'Content-Type': 'application/json',
        ...(optXResourceVersion && { 'x-resource-version': optXResourceVersion }),
      },
      data: configuration,
    },
  );
  return response;
};

/**
* Deletes a Webhook Configuration by Webhook ID
* @group Webhook Management
* @param {string} environment Environment name: https://{{environment}}.bloomreach.io
* @param {string} xAuthToken BrX API Token
* @param {string} webhookConfigurationId Webhook Configuration ID
* @returns {AxiosPromise}
* @example
* ```ts
* deleteWebhookConfiguration(environment, xAuthToken, webhookConfigurationId)
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const deleteWebhookConfiguration = async (
  environment: string,
  xAuthToken: string,
  webhookConfigurationId: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONSTANTS.WEBHOOKS_API_PATH}/configurations/${webhookConfigurationId}`,
    {
      method: 'DELETE',
      headers: {
        'x-auth-token': xAuthToken,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};

/**
 * Gets All Webhook Executions
 * @group Webhook Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @returns {AxiosPromise}
 * @example
* ```ts
* getAllWebhookExecutions(environment, xAuthToken)
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const getAllWebhookExecutions = async (
  environment: string,
  xAuthToken: string,
): AxiosPromise => {
  const url = `https://${environment}.bloomreach.io/${CONSTANTS.WEBHOOKS_API_PATH}/executions`;
  const response = await axios(url, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });

  return response;
};

/**
 * Gets a Webhook Execution by Webhook Execution ID
 * @group Webhook Management
 * @param {string} environment Environment name: https://{{environment}}.bloomreach.io
 * @param {string} xAuthToken BrX API Token
 * @param {string} webhookExecutionId Webhook Execution ID
 * @returns {AxiosPromise}
 * @example
* ```ts
* getWebhookExecution(environment, xAuthToken, webhookExecutionId)
*   .then(response => console.log(response.data))
*   .catch(error => console.error(error));
* ```
*/
export const getWebhookExecution = async (
  environment: string,
  xAuthToken: string,
  webhookExecutionId: string,
): AxiosPromise => {
  const url = `https://${environment}.bloomreach.io/${CONSTANTS.WEBHOOKS_API_PATH}/executions/${webhookExecutionId}`;
  const response = await axios(url, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });

  return response;
};
