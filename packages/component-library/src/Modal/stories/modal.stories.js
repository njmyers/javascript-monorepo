import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withDocs from 'with-docs';
import { text, select, object, number } from '@storybook/addon-knobs/react';

import Modal from '../Modal';

import readme from '../README.md';

const modalGroup = 'Modal Knobs';
const childGroup = 'Child Knobs';

const {
  style,
  replaceStyle,
  onState,
  offState,
  transitionSpeed,
  transitionTiming,
} = Modal.defaultProps;

storiesOf('Component Library/1) Modal', module)
  .addDecorator(withDocs(readme))
  .add('Modal Demo', () => (
    <section
      style={{
        margin: 0,
        padding: '40px',
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: "url('https://source.unsplash.com/random')",
        backgroundSize: 'cover',
      }}
    >
      <h1>Some Heading</h1>
      <p>Try reloading to get a different background image.</p>
      <Modal
        status={select('status', ['on', 'off'], 'off', modalGroup)}
        style={object('style', style, modalGroup)}
        onState={object('onState', onState, modalGroup)}
        offState={object('offState', offState, modalGroup)}
        style={object('style', style, modalGroup)}
        replaceStyle={object('replaceStyle', replaceStyle, modalGroup)}
        transitionSpeed={number(
          'transitionSpeed',
          transitionSpeed,
          {
            min: 0,
            step: 0.25,
          },
          modalGroup
        )}
        transitionTiming={text('transitionTiming', transitionTiming)}
      >
        <p>{text('childText', 'Modal Text', childGroup)}</p>
      </Modal>
    </section>
  ));
