export const TEST_CONSTANTS = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  X_AUTH_TOKEN: process.env.X_AUTH_TOKEN,

  //  SITE MANAGEMENT API TESTS
  PROJECT_ID: process.env.PROJECT_ID,
  CHANNEL_ID: process.env.CHANNEL_ID,
  CHANNEL_AND_PROJECT: process.env.CHANNEL_ID + '-' + process.env.PROJECT_ID,
  COMPONENT: process.env.COMPONENT,
  COMPONENT_GROUP: process.env.COMPONENT_GROUP,
  ROUTE: process.env.ROUTE,
  LAYOUT: process.env.LAYOUT,
  MENU: process.env.MENU,

  // FOLDER MANAGEMENT API TESTS
  FOLDER_PATH: process.env.FOLDER_PATH,

  // CONTENT MANAGEMENT API TESTS
  DOCUMENT_PATH: process.env.DOCUMENT_PATH,
  FOLDER_PATH: process.env.FOLDER_PATH,
  PAGE_PATH: process.env.PAGE_PATH,
  RESOURCE_BUNDLE_PATH: process.env.RESOURCE_BUNDLE_PATH,


  // CONTENT TYPE MANAGEMENT API TESTS
  CONTENT_TYPE: process.env.CONTENT_TYPE,
};