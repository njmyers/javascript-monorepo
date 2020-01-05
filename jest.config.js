module.exports = {
  preset: 'ts-jest',
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
