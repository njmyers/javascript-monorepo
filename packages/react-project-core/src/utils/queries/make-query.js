import { compose } from 'smalldash';
import queryString from '../queries/query-string';
import addDefaults from '../queries/add-defaults';

const makeQuery = (defaults) => (query) =>
  compose(
    queryString,
    addDefaults(defaults)
  )(query);

export default makeQuery;
