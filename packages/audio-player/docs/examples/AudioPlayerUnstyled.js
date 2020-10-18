import React, { useEffect, useState, useCallback } from 'react';
import { Form } from '@njmyers/component-library';
import uuid from 'uuid/v1';

import { AudioPlayer, AudioPlayerProvider, usePlayer } from '../../src';
import './interface.sass';

function AudioPlayerControls() {
  const { show, destroy, start, stop, load } = usePlayer();
  const [track, setTrack] = useState({
    url: 'https://blatboy.s3.amazonaws.com/2018/03/BuddySweetheartUke.mp3',
    artist: 'Artist',
    name: 'Track #1',
  });

  useEffect(() => {
    show();
    return () => destroy();
  }, []);

  const handleChange = useCallback(
    ({ currentTarget: { name, value } }) => {
      setTrack({
        ...track,
        [name]: value,
      });
    },
    [track]
  );

  const handleClick = useCallback(
    () =>
      load({
        name: track.name,
        artist: track.artist,
        urls: [track.url],
        id: uuid(),
      }),
    [track]
  );

  return (
    <div className="interface">
      <h5 className="sans">Seperately Mapped Interface</h5>
      <Form.Input name="url" value={track.url} onChange={handleChange} />
      <Form.Input name="name" value={track.name} onChange={handleChange} />
      <Form.Input name="artist" value={track.artist} onChange={handleChange} />
      <button onClick={handleClick}>Load URL</button>
      <button onClick={start}>Externally Mapped Start Button</button>
      <button onClick={stop}>Externally Mapped Stop Button</button>
    </div>
  );
}

function AudioPlayerUnstyled() {
  return (
    <AudioPlayerProvider>
      <AudioPlayerControls />
      <h5 className="sans">Audio Player</h5>
      <AudioPlayer className="customAudioClass" />
    </AudioPlayerProvider>
  );
}

export default AudioPlayerUnstyled;
