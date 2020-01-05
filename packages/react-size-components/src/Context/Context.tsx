import * as React from 'react';
// types
import { Props } from './types';
// styles
import ConfigurationInjector from '../ConfigurationInjector';
import createConfiguration from '../configurations';

const withSizeContext = (configurations, Component) => {
  const Context = React.createContext();

  const SizeProvider = ConfigurationInjector(configurations)(props => (
    <Context.Provider value={props.sizes}>{props.children}</Context.Provider>
  ));

  return { SizeProvider, SizeConsumer: Context.Consumer };
};

export default withSizeContext;
