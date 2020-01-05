import queryString from 'query-string';

const parseURL = (url) => queryString.parseUrl(url).query;

export default parseURL;
