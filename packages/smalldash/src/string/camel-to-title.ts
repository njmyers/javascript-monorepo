import camelTo from './camel-to';
import acceptStrings from './accept-strings';
import capitalize from './capitalize';
import { compose, sideEffects } from '../functional';

export default compose(
  capitalize,
  camelTo(' '),
  acceptStrings
);
