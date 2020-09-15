module.exports = {
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts', '**/*.test.jsx', '**/*.test.tsx'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
