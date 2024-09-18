import axios, { AxiosPromise } from 'axios';
import { CONSTANTS } from '../constants';
import { DeliveryApiSettingsV1 } from '@/types';

/**
 * Get V1 Delivery API Settings
 * @group Delivery API Settings
 * @category V1
 * @param {string} environment
 * @param {string} xAuthToken
 * @example
 * ```ts
 * getAllWebhookConfigurations(environment, xAuthToken)
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 */
export const getV1DeliveryApiSettings = async (
  environment: string,
  xAuthToken: string,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONSTANTS.DELIVERY_API_SETTINGS.V1}`,
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
 * Update the V1 Delivery API Settings
 * @group Delivery API Settings
 * @category V1
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} xResourceVersion
 * @param {object} data
 */
export const updateV1DeliveryApiSettings = async (
  environment: string,
  xAuthToken: string,
  xResourceVersion: string,
  data: DeliveryApiSettingsV1,
): AxiosPromise => {
  const response = await axios(
    `https://${environment}.bloomreach.io/${CONSTANTS.DELIVERY_API_SETTINGS.V1}`,
    {
      method: 'PATCH',
      headers: {
        'x-auth-token': xAuthToken,
        'Content-Type': 'application/json',
        'X-Resource-Version': xResourceVersion,
      },
      data,
    },
  );
  return response;
};
