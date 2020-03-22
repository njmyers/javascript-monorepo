module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/helpers/',
    '/templates/',
    '__fixtures__',
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
