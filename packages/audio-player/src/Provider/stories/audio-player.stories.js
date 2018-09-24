import * as React from 'react';
import { storiesOf } from '@storybook/react';
import AudioApplication from '../Provider';
import store from '../store';

import { playerShow, loadTrack, playerPause } from '../../Core/audio-actions';

store.dispatch(playerShow());

store.dispatch(
  loadTrack({
    name: 'Sinkin Soon',
    artist: 'Ex Fab',
    urls: ['https://blatboy.s3.amazonaws.com/2017/11/SinkinSoonEx.mp3'],
  })
);

store.dispatch(playerPause());

storiesOf('Audio Player', module).add('Demo', () => <AudioApplication />);
