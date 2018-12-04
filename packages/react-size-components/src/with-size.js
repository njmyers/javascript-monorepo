import * as React from 'react';
import createConfiguration from './configurations';
import ConfigurationInjector from './ConfigurationInjector';

/**
 * Adds withSize to the wrapped depending on the configuration object. Some HOC have dependencies on other HOC so this satisfies that logic as well.
 * @param {object} options this is the configuration object. It specifies which measurements to take.
 * @param {component} Wrapped the react component to wrap.
 */
const withSize = (options) => (Wrapped: React.Component<any>) =>
  ConfigurationInjector(createConfiguration(options))(Wrapped);

export default withSize;
