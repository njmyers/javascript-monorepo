module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.{js}',
    '!**/node_modules/**',
    '!**/flow-typed/**',
  ],
  roots: ['packages/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(sass|css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(md)$': '<rootDir>/__mocks__/markdown-mock.js',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/*',
    '/dist/*',
    '/helpers/*',
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
};
