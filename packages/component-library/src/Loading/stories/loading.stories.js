import React, { Fragment } from 'react';
import { text, select, object } from '@storybook/addon-knobs/react';

import { storiesOf } from '@storybook/react';

import Loading from '../Loading';

storiesOf('Component Library/2) Loading', module).add('Demo', () => (
  <Fragment>
    <p>Some Text</p>
    <Loading
      status={select('status', ['on', 'off'], 'on')}
      color={text('color', 'rgba(0, 0, 0, 1)')}
      style={object('style', {
        width: '10px',
        height: '10px',
      })}
    />
  </Fragment>
));
