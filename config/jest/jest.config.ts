import path from 'path';

export default {
  clearMocks: true,
  verbose: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],

  rootDir: '../../',
  modulePaths: [ '<rootDir>/src' ],
  moduleDirectories: [
    'node_modules', 'src'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  setupFilesAfterEnv: [ '<rootDir>/config/jest/setupTests.ts' ],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    // '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
  },
};
