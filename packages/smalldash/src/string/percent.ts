import percentString from './percent-string';
const percent = (x: number, y: number): string =>
  percentString(Math.round((x / y) * 100));

export default percent;
