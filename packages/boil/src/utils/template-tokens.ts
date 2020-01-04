import { kebabToTitle, kebabToCamel, kebabToSnake } from 'smalldash';

const templateTokens = [
  {
    token: 'camelCase',
    fn: kebabToCamel,
  },
  {
    token: 'PascalCase',
    fn: (word: string): string =>
      kebabToTitle(word)
        .split(' ')
        .join(''),
  },
  {
    token: 'kebab-case',
    fn: (word: string): string => word,
  },
  {
    token: 'KEBAB-CASE',
    fn: (word: string): string => word.toUpperCase(),
  },
  {
    token: 'snake_case',
    fn: kebabToSnake,
  },
  {
    token: 'SNAKE_CASE',
    fn: (word: string): string => kebabToSnake(word).toUpperCase(),
  },
];

export default templateTokens;
