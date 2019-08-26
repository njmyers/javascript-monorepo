import { kebabToTitle, kebabToCamel, kebabToSnake } from 'smalldash';

const templateTokens = [
  {
    token: 'camel',
    fn: kebabToCamel,
  },
  {
    token: 'Pascal',
    fn: string =>
      kebabToTitle(string)
        .split(' ')
        .join(''),
  },
  {
    token: 'kebab',
    fn: string => string,
  },
  {
    token: 'UPPER',
    fn: string => kebabToSnake(string).toUpperCase(),
  },
];

export default templateTokens;
