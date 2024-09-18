import { getV2DeliveryApiSettings } from './index';

describe('Delivery API Settings V1 Management', () => {
  const ENVIRONMENT = process.env.ENVIRONMENT || '';
  const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN || '';

  beforeAll(async () => {
    if (!ENVIRONMENT) {
      process.exit();
    }
    if (!X_AUTH_TOKEN) {
      process.exit();
    }
  });

  describe('Get Delivery API Settings V2', () => {
    let response: any;
    beforeAll(async () => {
      response = await getV2DeliveryApiSettings(ENVIRONMENT, X_AUTH_TOKEN)
        .then((res) => res.data)
        .catch((error) => error.message);
    });

    it('Gets the Delivery API V2 Settings ', async () => {
      await expect(response.enabled).toBe(true);
      await expect(response.skipTranslations).toBe(true);
    });
  });
});
