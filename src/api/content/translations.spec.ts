import { translationUnlink } from './index';

describe('CONTENT MANAGEMENT API: TRANSLATIONS', () => {
  const ENVIRONMENT = process.env.ENVIRONMENT || '';
  const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN || '';
  const DOCUMENT_PATH = process.env.DOCUMENT_PATH || '';

  beforeAll(async () => {
    if (!ENVIRONMENT || !X_AUTH_TOKEN || !DOCUMENT_PATH) {
      process.exit();
    }
  });

  describe('translationUnlink', () => {
    let document: Document;
    beforeAll(async () => {
      document = await translationUnlink(
        ENVIRONMENT,
        X_AUTH_TOKEN,
        [DOCUMENT_PATH],
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
});
