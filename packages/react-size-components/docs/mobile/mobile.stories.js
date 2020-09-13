import React from 'react';

import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child, { Breakpoint } from './Child';

export default {
  title: 'react-size-components/3) Window',
  decorators: [withDocs(readme)],
};

export const MobileFlag = () => <Child />;
export const MobileFlagAlternateBreakpoint = () => <Breakpoint />;
