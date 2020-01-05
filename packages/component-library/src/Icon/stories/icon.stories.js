import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import readme from '../README.md';

import 'normalize.css';

import Icon from '../index';

const Box = ({ name, children, size }) => {
  const article = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const style = {
    height: `${size}px`,
    width: `${size}px`,
    padding: 0,
    margin: 0,
  };

  const heading = {
    fontFamily: 'monospace',
  };

  return (
    <article style={article}>
      <h2 style={heading}>{name}</h2>
      <div style={style}>{children}</div>
    </article>
  );
};

const iconStories = storiesOf('@njmyers/component-library|4) Icons', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withDocs(readme))
  .addDecorator(withKnobs);

Object.keys(Icon).forEach(name => {
  const Display = Icon[name];

  iconStories.add(name, () => (
    <Box size={number('size', 100)} name={name}>
      <Display />
    </Box>
  ));
});
