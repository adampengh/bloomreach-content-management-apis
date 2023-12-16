import { createDeveloperProject, deleteDeveloperProject, getAllProjects, getDeveloperProject } from './index';

let projectId = process.env.PROJECT_ID || '';

describe('PROJECT MANAGEMENT API', () => {
  const ENVIRONMENT = process.env.ENVIRONMENT || '';
  const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN || '';
  const PROJECT_NAME = process.env.PROJECT_NAME || '';

  beforeAll(async () => {
    if (!ENVIRONMENT) {
      // throw new Error('ENVIRONMENT not defined');
      process.exit();
    }

    if (!X_AUTH_TOKEN) {
      // throw new Error('X_AUTH_TOKEN not defined');
      process.exit();
    }

    if (!PROJECT_NAME) {
      // throw new Error('PROJECT_NAME not defined');
      process.exit();
    }
  });

  describe('getAllProjects', () => {
    it('returns all developer projects', async () => {
      const projects = await getAllProjects(
        ENVIRONMENT,
        X_AUTH_TOKEN,
      )
        .then((response) => response.data)
        .catch((error) => {
          expect(error.name).toBe('AxiosError');
        });

      await expect(projects).toBeDefined();
      await expect(typeof projects).toBe('object');
    });
  });

  describe('createDeveloperProject', () => {
    beforeAll(async () => {
      projectId = await createDeveloperProject(
        ENVIRONMENT,
        X_AUTH_TOKEN,
        PROJECT_NAME,
        false,
      )
        .then((response) => response.data.id)
        .catch((error) => {
          expect(error.name).toBe('AxiosError');
        });
    });

    it('Creates a project', async () => {
      await expect(projectId).toBeDefined();
    });

    it('Returns a projectId', async () => {
      await expect(typeof projectId).toBe('string');
      await expect(projectId.length).toBeGreaterThan(0);
    });
  });

  describe('getDeveloperProject', () => {
    let project: any;
    beforeAll(async () => {
      project = await getDeveloperProject(
        ENVIRONMENT,
        X_AUTH_TOKEN,
        projectId,
      )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          expect(error.name).toBe('AxiosError');
        });
    });

    it('Gets a project specific', async () => {
      await expect(project).toBeDefined();
    });

    it('Returns an object', async () => {
      await expect(typeof project).toBe('object');
      await expect(project.id).toEqual(projectId);
    });
  });

  describe('deleteDeveloperProject', () => {
    let statusCode: number;
    beforeAll(async () => {
      statusCode = await deleteDeveloperProject(
        ENVIRONMENT,
        X_AUTH_TOKEN,
        projectId,
      )
        .then((response) => response.status)
        .catch((error) => error.response.status);
    });

    it('Returns a 200 response', async () => {
      expect(statusCode).toBe(200);
    });
  });
});
