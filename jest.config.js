// jest.config.js
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
module.exports = {
  bail: true,
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/'],
  passWithNoTests: true,
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/.jest/setEnvVars.local.js'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
