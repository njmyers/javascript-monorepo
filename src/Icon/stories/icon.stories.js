import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import withReadme from 'storybook-readme/with-readme';
import withDocs from '../../../.storybook/with-docs';

import readme from '../README.md';

import 'normalize.css';

import Icon from '../index';

const Box = ({ name, children }) => {
  const article = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const style = {
    height: '100px',
    width: '100px',
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

const iconStories = storiesOf('4) Icons', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withDocs(readme));

Object.keys(Icon).forEach((name) => {
  const Display = Icon[name];

  iconStories.add(name, () => (
    <Box name={name}>
      <Display />
    </Box>
  ));
});
