import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import LongPage from './LongPage';
import SemiSticky from '../SemiSticky';

storiesOf('SemiSticky', module)
  .add('Simple Demo', () => (
    <div>
      <SemiSticky>
        <p style={{ color: 'white' }}>Header</p>
      </SemiSticky>
      <LongPage />
    </div>
  ))
  .add('Changing Animated States', () => (
    <div>
      <SemiSticky onState={{ opacity: 1 }} offState={{ opacity: 0 }}>
        <p style={{ color: 'white' }}>Header</p>
      </SemiSticky>
      <LongPage />
    </div>
  ))
  .add('Adding Style/Animation Information Demo', () => (
    <div>
      <SemiSticky
        replaceStyle={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          background: 'rgba(200, 20, 20, 0.8)',
          height: '150px',
        }}
        onState={{
          transform: 'translateY(0px)',
        }}
        offState={{
          transform: 'translateY(150px)',
        }}
      >
        <p style={{ color: 'white' }}>Footer</p>
      </SemiSticky>
      <LongPage />
    </div>
  ))
  .add('Adjusting Top Entrance', () => (
    <div>
      <SemiSticky top={100}>
        <p style={{ color: 'white' }}>Header</p>
      </SemiSticky>
      <LongPage />
    </div>
  ));
