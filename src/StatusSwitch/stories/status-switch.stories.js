import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
// import withReadme from 'storybook-readme/with-readme';
// import withDocs from '../with-docs';

// import readme from './README.md';
// import Child from './Child';
// import Parent from './Parent';
// import Advanced from './Advanced';

import 'normalize.css';

import Demo from './Demo';

storiesOf('3) Status Switch', module).add('demo', () => <Demo />);
