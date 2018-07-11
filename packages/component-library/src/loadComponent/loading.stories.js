import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import Loading from '../../src/Loading';

storiesOf('Component Library/2) Loading', module).add('Demo', () => (
  <Fragment>
    <p>Some Text</p>
    <Loading />
  </Fragment>
));
