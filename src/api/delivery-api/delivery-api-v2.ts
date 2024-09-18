import axios, { AxiosPromise } from 'axios';
import { CONSTANTS } from '../constants';
import { DeliveryApiSettingsV2 } from '@/types';

/**
 * Get V2 Delivery API Settings
 * @group Delivery API Settings
 * @category V2
 * @param {string} environment
 * @param {string} xAuthToken
 */
export const getV2DeliveryApiSettings = async (
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
 * @category V2
 * @param {string} environment
 * @param {string} xAuthToken
 * @param {string} xResourceVersion
 * @param {object} data
 */
export const updateV2DeliveryApiSettings = async (
  environment: string,
  xAuthToken: string,
  xResourceVersion: string,
  data: DeliveryApiSettingsV2,
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
