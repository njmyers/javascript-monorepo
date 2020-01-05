/* eslint-disable */
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx', '.tsx']
      }
    ],
    'react/prop-types': 0,
    'react/destructuring-assignment': false
  },
  plugins: ['jsx-a11y'],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts'],
      env: {
        jest: true
      },
      plugins: ['jest']
    }
  ],
  env: {
    es6: true
  }
}
