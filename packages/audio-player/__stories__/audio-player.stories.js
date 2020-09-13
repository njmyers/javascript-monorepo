import * as React from 'react';
import * as Examples from '../__docs__';

export default {
  title: 'audio-player/Examples',
};

export const README = () => {
  return <p className="sans">Welcome to the interactive playground!</p>;
};

export const Basic = () => {
  return <Examples.AudioPlayerBasic />;
};

export const Hidden = () => {
  return <Examples.AudioPlayerHidden />;
};

export const Multiple = () => {
  return <Examples.AudioPlayerMultiple />;
};

export const Unstyled = () => {
  return <Examples.AudioPlayerUnstyled />;
};
