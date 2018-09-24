import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AudioPlayer from '../Core';

const AudioApplication = ({ className }) => (
  <Provider store={store}>
    <AudioPlayer className={className} />
  </Provider>
);

export default AudioApplication;
