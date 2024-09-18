import axios from 'axios';
import { getV1DeliveryApiSettings, updateV1DeliveryApiSettings } from './index';

describe('Delivery API Settings V1 Management', () => {
  const ENVIRONMENT = process.env.ENVIRONMENT || '';
  const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN || '';
  const CHANNEL = process.env.CHANNEL || '';

  beforeAll(async () => {
    if (!ENVIRONMENT) {
      process.exit();
    }
    if (!X_AUTH_TOKEN) {
      process.exit();
    }
    if (!CHANNEL) {
      process.exit();
    }
  });

  describe('Get Delivery API Settings V1', () => {
    let response: any;
    beforeAll(async () => {
      response = await getV1DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN)
        .then((res) => res.data)
        .catch((error) => error.message);
    });

    it('Gets the Delivery API V1 Settings ', async () => {
      await expect(response.enabled).toBe(true);
      await expect(response.skipTranslations).toBe(true);
    });
  });

  describe('Disable Delivery API V1', () => {
    let xResourceVersion: string;
    let deliveryManagementApiResponse: any;
    let deliveryApiResponse: any;

    beforeAll(async () => {
      // Get the x-resource-version header
      xResourceVersion = await getV1DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN)
        .then((res) => res.headers['x-resource-version'] || '')
        .catch(() => '');

      // Update the Delivery API settings
      await updateV1DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN, xResourceVersion, {
        enabled: false,
      })
        .then((res) => res.data)
        .catch((error) => error.message);

      // Check that the Delivery API is disabled
      deliveryManagementApiResponse = await getV1DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN)
        .then((res) => res.data)
        .catch((error) => error.message);

      // Check that the Delivery API response is 404
      deliveryApiResponse = await axios.get(
        `https://${ENVIRONMENT}.bloomreach.io/delivery/site/v1/channels/${CHANNEL}/pages`,
      )
        .then((res) => res.status)
        .catch((error) => error.response.status);
    });

    it('Disables Delivery API V1 ', async () => {
      await expect(deliveryManagementApiResponse.enabled).toBe(false);
      await expect(deliveryManagementApiResponse.skipTranslations).toBe(true);
      await expect(deliveryApiResponse).toBe(404);
    });
  });

  describe('Enable Delivery API V1', () => {
    let xResourceVersion: string;
    let deliveryManagementApiResponse: any;
    let deliveryApiResponse: any;

    beforeAll(async () => {
      // Get the x-resource-version header
      xResourceVersion = await getV1DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN)
        .then((res) => res.headers['x-resource-version'] || '')
        .catch(() => '');

      // Update the Delivery API settings
      await updateV1DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN, xResourceVersion, {
        enabled: true,
      })
        .then((res) => res.data)
        .catch((error) => error.message);

      // Check that the Delivery API is enabled
      deliveryManagementApiResponse = await getV1DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN)
        .then((res) => res.data)
        .catch((error) => error.message);

      // Check that the Delivery API response is 200
      deliveryApiResponse = await axios.get(
        `https://${ENVIRONMENT}.bloomreach.io/delivery/site/v1/channels/${CHANNEL}/pages`,
      )
        .then((res) => res.status)
        .catch((error) => error.response.status);
    });

    it('Enables the Delivery API V1', async () => {
      await expect(deliveryManagementApiResponse.enabled).toBe(true);
      await expect(deliveryManagementApiResponse.skipTranslations).toBe(true);
      await expect(deliveryApiResponse).toBe(200);
    });
  });
});
