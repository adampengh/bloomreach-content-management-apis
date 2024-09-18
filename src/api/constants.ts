const version = 'v1';

export const CONSTANTS = {
  CONTENT_TYPE_API_PATH: `management/site/${version}`,
  DELIVERY_API_SETTINGS: {
    V1: `management/deliveryapisettings/${version}/deliveryApiV1`,
    V2: `management/deliveryapisettings/${version}/deliveryApiV2`,
  },
  FOLDER_API_PATH: `management/folder/${version}`,
  EXPORT_API_PATH: `management/content-export/${version}`,
  IMPORT_API_PATH: `management/content-import/${version}`,
  PROJECTS_API_PATH: `management/projects/${version}`,
  SITE: {
    CHANNEL_API_PATH: `management/site/${version}`,
  },
  WEBHOOKS_API_PATH: `management/webhooks/${version}`,
};

export const ERROR_CODES = {
  403: 'Forbidden',
  409: 'Conflict',
  415: '',
};
