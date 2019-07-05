import invariant from 'invariant';
// types
import { Configuration, Configurations } from '../configurations';

const defaultConfiguration: Configuration = {
  name: '',
  schema: '',
  fn: () => '',
  subscriptions: null,
};

export const validateConfigurations = (configurations: Configurations) => {
  return configurations.map(config => {
    // validate the name
    invariant(
      typeof config.name === 'string',
      'Please provide a string name for your size configuration'
    );
    // validate the function
    invariant(
      typeof config.fn === 'function',
      'The fn value of your size configuration is not a function'
    );
    // define defaults?
    return { ...defaultConfiguration, ...config };
  });
};

export const createInitialState = (configurations: Configurations) =>
  configurations.reduce(
    (state, { schema, name } = {}) => ({
      ...state,
      [name]: schema,
    }),
    {
      subscriptions: [],
      DOMNode: null,
    }
  );

export default createInitialState;
