# React YouTube

This is the new hooks based version of the old [react-youtube-component](https://www.npmjs.com/package/react-youtube-component)! I have also changed the package name so that it is namespaced under my organization `@njmyers`. See the updated installation instructions below.

A thin wrapper around the [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference). The goal is to make it easier to use the API in a react centered way. The component uses hooks to downloads the API and create a player instance. The player API is unchanged so you can use the [IFrame API documentation](https://developers.google.com/youtube/iframe_api_reference) directly on your YouTube element to load videos, create playlists and show your content.

## Installation

`npm install @njmyers/react-you-tube`;

or

`yarn add @njmyers/react-you-tube`;

<!-- STORY -->

### YouTube Basic

This is the most basic and easy way to use this component. Simply use the component and pass in all of required props as dictated by the [YouTube IFrame API documentation](https://developers.google.com/youtube/iframe_api_reference)

<!-- STORY -->

```js
import React from 'react';
import YouTube from '../src/YouTube';

function YouTubeBasic() {
  return (
    <YouTube
      width="640"
      height="390"
      videoId="Z1BCujX3pw8"
      playerVars={{ autoplay: 0, controls: 1 }}
    />
  );
}

export default YouTubeBasic;

```

### YouTube Controlled

You can also get a reference to the player if you want to map additional controls. Just use the `onPlayer` callback.

<!-- STORY -->

```js
import React, { useState } from 'react';
import YouTube from '../src/YouTube';

function YouTubeControlled() {
  const [player, setPlayer] = useState(null);
  const [videoId, setVideoId] = useState('');

  return (
    <React.Fragment>
      <YouTube
        width="640"
        height="390"
        videoId="Z1BCujX3pw8"
        playerVars={{ autoplay: 0, controls: 1 }}
        onPlayer={player => setPlayer(player)}
      />
      <div>
        <label className="sans">Enter Video ID</label>
        <input
          name="videoId"
          value={videoId}
          onChange={e => setVideoId(e.target.value)}
        />
        <button onClick={() => player.loadVideoById(videoId)}>
          <span className="button_text-sans">Change Video</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default YouTubeControlled;

```

### YouTube Hook

For functional components, you can easily build out your own control use the `useYouTube` hook. This makes it simple to control the player reference and build out additional user interfaces. The hook is the most flexible API and is probably easier then the controlled example if you need flexibility.

<!-- STORY -->

```js
import React, { useState } from 'react';
import useYouTube from '../src/use-you-tube';

function YouTubeHook() {
  const [videoId, setVideoId] = useState('');
  const [node, setNode] = React.useState(null);
  const handleRef = React.useCallback(node => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  const player = useYouTube(node, {
    width: 640,
    height: 390,
    videoId: 'Z1BCujX3pw8',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  });

  return (
    <React.Fragment>
      <div ref={handleRef} />
      <div>
        <label className="sans">Enter Video ID</label>
        <input
          name="videoId"
          value={videoId}
          onChange={e => setVideoId(e.target.value)}
        />
        <button onClick={() => player.loadVideoById(videoId)}>
          <span className="button_text-sans">Change Video</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default YouTubeHook;

```
