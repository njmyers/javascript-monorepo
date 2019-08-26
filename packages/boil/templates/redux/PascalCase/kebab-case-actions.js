export const createPascalCase = value => ({
  type: '@SNAKE_CASE/CREATE',
  value,
});

export const updatePascalCase = value => ({
  type: '@SNAKE_CASE/UPDATE',
  value,
});

export const deletePascalCase = value => ({
  type: '@SNAKE_CASE/DELETE',
  value,
});
