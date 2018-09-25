import * as React from 'react';
import uuid from 'uuid/v1';
import Core from '../Core';

import createProvider, { withPlayer as _withPlayer } from '../Provider';

const createAudioPlayer = (storeKey = uuid()) => {
  const Provider = createProvider(storeKey);
  const withPlayer = _withPlayer(storeKey, Provider);

  const AudioPlayer = (props) => (
    <Provider>
      <Core classPrefix={props.className} />
    </Provider>
  );

  return {
    AudioPlayer,
    withPlayer,
  };
};

export default createAudioPlayer;
