module.exports = {
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        // turn off conflicting rules
        indent: 'off',
        'import/no-unresolved': 'error',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'no-use-before-define': 'off',
        // turn on ts replacements
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            typedefs: false,
            functions: false,
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
};
