
### AudioPlayer Basic

<!-- STORY -->

```js
import React, { useEffect, useState, useCallback } from 'react';
import { Form } from '@njmyers/component-library';
import uuid from 'uuid/v1';

import createAudioPlayer from '../src/AudioPlayer';
import './interface.sass';

function Interface({
  audioPlayerShow,
  audioPlayerDestroy,
  audioPlayerStart,
  audioPlayerStop,
  loadAudioTrack,
}) {
  const [track, setTrack] = useState({
    url: 'https://blatboy.s3.amazonaws.com/2018/03/BuddySweetheartUke.mp3',
    artist: 'Artist',
    name: 'Track #1',
  });

  useEffect(() => {
    audioPlayerShow();
    return () => audioPlayerDestroy();
  });

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
      loadAudioTrack({
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
      <button onClick={audioPlayerStart}>Externally Mapped Start Button</button>
      <button onClick={audioPlayerStop}>Externally Mapped Stop Button</button>
    </div>
  );
}

const { withPlayer, AudioPlayer } = createAudioPlayer();
const ConnectedInterface = withPlayer(Interface);

function AudioPlayerBasic() {
  return (
    <article>
      <ConnectedInterface />
      <AudioPlayer />
    </article>
  );
}

export default AudioPlayerBasic;

```

### AudioPlayer Hidden

<!-- STORY -->

```js
import React, { useEffect, useState, useCallback } from 'react';
import { Form } from '@njmyers/component-library';
import uuid from 'uuid/v1';

import createAudioPlayer from '../src/AudioPlayer';
import './interface.sass';

function Interface({
  audioPlayerShow,
  audioPlayerHide,
  audioPlayerDestroy,
  audioPlayerStart,
  audioPlayerStop,
  loadAudioTrack,
}) {
  const [track, setTrack] = useState({
    url: 'https://blatboy.s3.amazonaws.com/2018/03/BuddySweetheartUke.mp3',
    artist: 'Artist',
    name: 'Track #1',
  });

  useEffect(() => {
    return () => audioPlayerDestroy();
  });

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
      loadAudioTrack({
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
      <button onClick={audioPlayerShow}>Show Player</button>
      <button onClick={audioPlayerHide}>Hide Player</button>
      <button onClick={handleClick}>Load URL</button>
      <button onClick={audioPlayerStart}>Externally Mapped Start Button</button>
      <button onClick={audioPlayerStop}>Externally Mapped Stop Button</button>
    </div>
  );
}

const { withPlayer, AudioPlayer } = createAudioPlayer();
const ConnectedInterface = withPlayer(Interface);

function AudioPlayerHidden() {
  return (
    <article>
      <ConnectedInterface />
      <AudioPlayer />
    </article>
  );
}

export default AudioPlayerHidden;

```

### AudioPlayer Multiple

<!-- STORY -->

```js
import React, { useEffect, useState, useCallback } from 'react';
import { Form } from '@njmyers/component-library';
import uuid from 'uuid/v1';

import createAudioPlayer from '../src/AudioPlayer';
import './interface.sass';

function Interface({
  audioPlayerShow,
  audioPlayerDestroy,
  audioPlayerStart,
  audioPlayerStop,
  loadAudioTrack,
}) {
  const [track, setTrack] = useState({
    url: 'https://blatboy.s3.amazonaws.com/2018/03/BuddySweetheartUke.mp3',
    artist: 'Artist',
    name: 'Track #1',
  });

  useEffect(() => {
    audioPlayerShow();
    return () => audioPlayerDestroy();
  });

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
      loadAudioTrack({
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
      <button onClick={audioPlayerStart}>Externally Mapped Start Button</button>
      <button onClick={audioPlayerStop}>Externally Mapped Stop Button</button>
    </div>
  );
}

const FirstInstance = createAudioPlayer();
const SecondInstance = createAudioPlayer();

const FirstInterface = FirstInstance.withPlayer(Interface);
const SecondInterface = SecondInstance.withPlayer(Interface);

function AudioPlayerBasic() {
  return (
    <article className="parent-sans">
      <h3>First Instance</h3>
      <h4>First Interface</h4>
      <FirstInterface />
      <h4>First Player</h4>
      <FirstInstance.AudioPlayer
        trackInfo={false}
        volume={false}
        meter={false}
        className="myClass"
      />
      <h3>Second Instance</h3>
      <h4>Second Interface</h4>
      <SecondInterface />
      <h4>Second Player</h4>
      <SecondInstance.AudioPlayer
        trackInfo={false}
        volume={false}
        meter={false}
        className="myOtherClass"
      />
    </article>
  );
}

export default AudioPlayerBasic;

```

### AudioPlayer Unstyled

<!-- STORY -->

```js
import React, { useEffect, useState, useCallback } from 'react';
import { Form } from '@njmyers/component-library';
import uuid from 'uuid/v1';

import createAudioPlayer from '../src/AudioPlayer';
import './interface.sass';

function Interface({
  audioPlayerShow,
  audioPlayerDestroy,
  audioPlayerStart,
  audioPlayerStop,
  loadAudioTrack,
}) {
  const [track, setTrack] = useState({
    url: 'https://blatboy.s3.amazonaws.com/2018/03/BuddySweetheartUke.mp3',
    artist: 'Artist',
    name: 'Track #1',
  });

  useEffect(() => {
    audioPlayerShow();
    return () => audioPlayerDestroy();
  });

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
      loadAudioTrack({
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
      <button onClick={audioPlayerStart}>Externally Mapped Start Button</button>
      <button onClick={audioPlayerStop}>Externally Mapped Stop Button</button>
    </div>
  );
}

const { withPlayer, AudioPlayer } = createAudioPlayer();
const ConnectedInterface = withPlayer(Interface);

function AudioPlayerBasic() {
  return (
    <article>
      <ConnectedInterface />
      <h5 className="sans">Audio Player</h5>
      <AudioPlayer className="customAudioClass" />
    </article>
  );
}

export default AudioPlayerBasic;

```
