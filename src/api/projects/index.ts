import axios, { AxiosPromise } from 'axios';

const PROJECTS_API_PATH = 'management/projects/v1';

export const getAllProjects = async (
  environment: string,
  xAuthToken: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/`, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });

  return response;
};

export const getDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}`, {
    method: 'GET',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};

export const createDeveloperProject = async (
  environment: string,
  xAuthToken: string,
  name: string,
  includeContentTypes: boolean,
  description = '',
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: {
      name,
      includeContentTypes,
      description,
    },
  });
  return response;
};

export const updateProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
  name: string,
  includeContentTypes: boolean,
  description = '',
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: {
      id: projectId,
      name,
      includeContentTypes,
      description,
    },
  });
  return response;
};

export const mergeProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}:merge`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
    data: {
      approveAllChanges: true,
    },
  });
  return response;
};

export const rebaseProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}:rebase`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const reopenProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`https://${environment}.bloomreach.io/${PROJECTS_API_PATH}/${projectId}:reopen`, {
    method: 'POST',
    headers: {
      'x-auth-token': xAuthToken,
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const deleteProject = async (
  environment: string,
  xAuthToken: string,
  projectId: string,
): AxiosPromise => {
  const response = await axios(`/api/projects/${projectId}?environment=${environment}`, {
    method: 'DELETE',
    headers: {
      'x-auth-token': xAuthToken,
    },
  });
  return response;
};
