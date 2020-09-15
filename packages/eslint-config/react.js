module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'shared-node-browser': true,
  },
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'jsx-a11y/label-has-associated-control': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
