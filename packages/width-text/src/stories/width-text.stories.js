import * as React from 'react';
import { text, boolean, number, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import WidthText from '../WidthText';

storiesOf('Width Text', module).add('Demo', () => (
  <React.Fragment>
    <h1>WidthText</h1>
    <p>Use the knob to adjust the percentage of the container width</p>
    <div
      style={{
        width: `${number('width', 100, { min: 25, max: 100, step: 1 })}%`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <WidthText>
        <h4>{text('h4Text', 'I am an h4 tag fitting my container width')}</h4>
        <p>{text('pText', 'I am a sweet paragraph tag')}</p>
      </WidthText>
    </div>
  </React.Fragment>
));
