import acceptStrings from './accept-strings';
import { compose } from '../functional';

const camelToPascal = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

export default compose(
  camelToPascal,
  acceptStrings
);
