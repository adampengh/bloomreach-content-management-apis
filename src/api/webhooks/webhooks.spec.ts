// APIs
import {
  getWebhookConfiguration,
  getAllWebhookConfigurations,
  getWebhookExecution,
  getAllWebhookExecutions,
} from './index';

// Types
import {
  WebhookConfigurations,
  WebhookConfiguration,
  WebhookExecutions,
  WebhookExecution
} from '@/types';

let webhookConfigurationId: string = process.env.WEBHOOK_CONFIGURATION_ID || '';
let webhookExecutionId: string = process.env.WEBHOOK_EXECUTION_ID || '';

describe('WEBHOOKS MANAGEMENT API', () => {
  const ENVIRONMENT: string = process.env.ENVIRONMENT || '';
  const X_AUTH_TOKEN: string = process.env.X_AUTH_TOKEN || '';

  beforeAll(async () => {
    if (!ENVIRONMENT) {
      throw new Error('ENVIRONMENT not defined');
    }

    if (!X_AUTH_TOKEN) {
      throw new Error('X_AUTH_TOKEN not defined');
    }
  });

  describe('getAllWebhookConfigurations()', () => {
    it('returns all webhooks configurations', async () => {
      const webhookConfigurations: WebhookConfigurations = await getAllWebhookConfigurations(
        ENVIRONMENT,
        X_AUTH_TOKEN,
      )
        .then((response) => response.data)
        .catch((error) => {
          expect(error.name).toBe('AxiosError');
        });

      webhookConfigurationId = webhookConfigurations[0].id;

      await expect(webhookConfigurations).toBeDefined();
      await expect(typeof webhookConfigurations).toBe('object');
    });
  });

  describe('getWebhookConfiguration()', () => {
    it('returns a webhook configuration', async () => {
      const webhookConfiguration: WebhookConfiguration = await getWebhookConfiguration(
        ENVIRONMENT,
        X_AUTH_TOKEN,
        webhookConfigurationId,
      )
        .then((response) => response.data)
        .catch((error) => {
          expect(error.name).toBe('AxiosError');
        });

      await expect(webhookConfiguration).toBeDefined();
      await expect(typeof webhookConfiguration).toBe('object');
    });
  });

  describe('getAllWebhookExecutions()', () => {
    it('returns all webhooks executions', async () => {
      const webhookExecutions: WebhookExecutions = await getAllWebhookExecutions(
        ENVIRONMENT,
        X_AUTH_TOKEN,
      )
        .then((response) => response.data)
        .catch((error) => {
          expect(error.name).toBe('AxiosError');
        });

      webhookExecutionId = webhookExecutions[0].id;
      await expect(webhookExecutions).toBeDefined();
      await expect(typeof webhookExecutions).toBe('object');
    });
  });

  describe('getWebhookExecution()', () => {
    it('returns a webhook execution', async () => {
      const webhookExecution: WebhookExecution = await getWebhookExecution(
        ENVIRONMENT,
        X_AUTH_TOKEN,
        webhookExecutionId,
      )
        .then((response) => response.data)
        .catch((error) => {
          expect(error.name).toBe('AxiosError');
        });

      await expect(webhookExecution).toBeDefined();
      await expect(typeof webhookExecution).toBe('object');
    });
  });
});
