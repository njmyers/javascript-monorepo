import percentString from './percent-string';
const percent = (x, y) => percentString(Math.round(x / y * 100));
export default percent;
