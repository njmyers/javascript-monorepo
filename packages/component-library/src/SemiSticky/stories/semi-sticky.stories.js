import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs/react';
import withDocs from 'with-docs';

import readme from '../README.md';

import SemiSticky from '../SemiSticky';
import LongPage from './LongPage';

const {
  top,
  className,
  onState,
  offState,
  replaceStyle,
  style,
  transitionSpeed,
  transitionTiming,
} = SemiSticky.defaultProps;

storiesOf('@njmyers/component-library|6) SemiSticky', module)
  .addDecorator(withDocs(readme))
  .add('Demo', () => (
    <React.Fragment>
      <SemiSticky
        top={number('top', top, { min: 0, step: 25 })}
        className={text('className', className)}
        onState={object('onState', onState)}
        offState={object('offState', offState)}
        style={object('style', style)}
        replaceStyle={object('replaceStyle', replaceStyle)}
        transitionSpeed={number('transitionSpeed', transitionSpeed, {
          min: 0,
          step: 0.25,
        })}
        transitionTiming={text('transitionTiming', transitionTiming)}
      >
        <p style={{ color: 'white' }}>{text('childText', 'header')}</p>
      </SemiSticky>
      <LongPage />
    </React.Fragment>
  ));
