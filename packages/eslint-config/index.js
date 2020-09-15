module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'import/no-unresolved': 'error',
  },
};
