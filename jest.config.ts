/* eslint-disable */
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/**/*.spec.ts'],
  transform: tsjPreset.transform,
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  clearMocks: true,
  verbose: true,
  forceExit: true,
  detectOpenHandles: true
};
