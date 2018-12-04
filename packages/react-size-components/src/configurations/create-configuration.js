/** @flow */
import combineOptions from './combine-options';
import componentConfig from './component';
import inViewConfig from './in-view';
import mobileConfig from './mobile';
import windowSizeConfig from './window-size';
import orientationConfig from './orientation';
// types
import type { Options, Configuration } from './types';

const createConfiguration = (options: Options): Array<Configuration> => {
  const {
    component,
    measureWindow,
    inView,
    mobile,
    orientation,
    breakpoint,
    resize,
    scroll,
    custom,
  } = combineOptions(options);

  return [
    inView ? inViewConfig : null,
    component ? componentConfig : null,
    orientation ? orientationConfig : null,
    mobile ? mobileConfig(breakpoint) : null,
    measureWindow ? windowSizeConfig : null,
    ...custom,
  ].filter((a) => a);
};

export default createConfiguration;
