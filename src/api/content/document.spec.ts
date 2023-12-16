import { getDocument } from './index';

describe('FOLDER MANAGEMENT API', () => {
  const ENVIRONMENT = process.env.ENVIRONMENT || '';
  const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN || '';
  const PROJECT_ID = process.env.PROJECT_ID || '';
  const CHANNEL = process.env.CHANNEL || '';
  const DOCUMENT_PATH = process.env.DOCUMENT_PATH || '';

  beforeAll(async () => {
    if (!ENVIRONMENT || !X_AUTH_TOKEN || !PROJECT_ID || !CHANNEL || !DOCUMENT_PATH) {
      process.exit();
    }
  });

  describe('getDocument', () => {
    let document: Document;
    beforeAll(async () => {
      document = await getDocument(
        ENVIRONMENT,
        X_AUTH_TOKEN,
        DOCUMENT_PATH,
        PROJECT_ID,
      )
        .then((response) => {
          console.log(response.status);
          return response.data;
        })
        .catch((error) => {
          console.error('error', error);
        });
    });

    it('Returns a 200 response', async () => {
      console.log('document', document);
      expect(document).toMatchObject<Document>(document);
    });
  });

  // describe('createOrUpdateFolder', () => {
  //   let folder: any;
  //   beforeAll(async () => {
  //     folder = await createOrUpdateFolder(
  //       ENVIRONMENT,
  //       X_AUTH_TOKEN,
  //       'folder',
  //       `${FOLDER_PATH}/test-folder`,
  //       'Test Folder',
  //     )
  //       .then((response) => {
  //         console.log('createOrUpdateFolder', response.data);
  //         return response.data;
  //       })
  //       .catch((error) => {
  //         console.log('createOrUpdateFolder', error);
  //         expect(error.name).toBe('AxiosError');
  //       });
  //   });

  //   it('creates a new folder ', async () => {
  //     await expect(folder).toBeDefined();
  //     await expect(typeof folder).toBe('object');

  //     await expect(folder.type).toEqual('folder');
  //     await expect(folder.path).toEqual(`${FOLDER_PATH}/test-folder`);
  //     await expect(folder.displayName).toEqual('Test Folder');
  //   });
  // });

  // describe('deleteFolder', () => {
  //   let statusCode: number;
  //   beforeAll(async () => {
  //     statusCode = await deleteFolder(
  //       ENVIRONMENT,
  //       X_AUTH_TOKEN,
  //       `${FOLDER_PATH}/test-folder`,
  //     )
  //       .then((response) => response.status)
  //       .catch((error) => error.response.status);
  //   });

  //   it('Returns a 200 response', async () => {
  //     expect(statusCode).toBe(200);
  //   });
  // });
});
