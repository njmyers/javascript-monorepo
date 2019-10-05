import { kebabToTitle, kebabToCamel, kebabToSnake } from 'smalldash';

const templateTokens = [
  {
    token: 'camelCase',
    fn: kebabToCamel,
  },
  {
    token: 'PascalCase',
    fn: string =>
      kebabToTitle(string)
        .split(' ')
        .join(''),
  },
  {
    token: 'kebab-case',
    fn: string => string,
  },
  {
    token: 'KEBAB-CASE',
    fn: string => string.toUpperCase(),
  },
  {
    token: 'snake_case',
    fn: kebabToSnake,
  },
  {
    token: 'SNAKE_CASE',
    fn: string => kebabToSnake(string).toUpperCase(),
  },
];

export default templateTokens;
