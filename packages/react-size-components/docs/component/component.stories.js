import React from 'react';
import { withDocs } from 'storybook-readme';

import readme from './README.md';
import Child from './Child';
import Parent from './Parent';
import ID from './ID';
import Debounce from './Debounce';

export default {
  title: 'react-size-components/2) Component',
  decorators: [withDocs(readme)],
};

export const BasicComponent = () => <Child onSize={console.log} />;

export const ParentCallback = () => <Parent onSize={console.log} />;

export const InjectIDCallback = () => <ID onSize={console.log} />;

export const DebounceCallback = () => <Debounce onSize={console.log} />;
