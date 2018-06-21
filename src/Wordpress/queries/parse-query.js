import queryString from 'query-string';

const parseQuery = (string) => queryString.parse(string);

export default parseQuery;
