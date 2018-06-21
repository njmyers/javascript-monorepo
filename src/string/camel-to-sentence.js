import camelTo from './camel-to';
import acceptStrings from './accept-strings';
import { compose } from '../functional';

export default compose(camelTo(' '), acceptStrings);
