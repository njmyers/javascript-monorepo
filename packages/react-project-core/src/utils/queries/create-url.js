import { compose } from 'smalldash';
import addSlug from './add-slug';
import makeQuery from './make-query';

const createURL = (defaults) => (slug) => (query) =>
	compose(addSlug(slug), makeQuery(defaults))(query);

export default createURL;
