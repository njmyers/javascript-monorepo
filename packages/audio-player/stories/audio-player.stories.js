import * as React from 'react';
import { storiesOf } from '@storybook/react';
import createAudioPlayer from '../src/AudioPlayer';
import LoadURL from './LoadURL';

const styles = {};

storiesOf(`@njmyers-audio-player`, module)
  .add('Demo Default Configuration', () => {
    const { withPlayer, AudioPlayer } = createAudioPlayer();
    const ConnectedInterface = withPlayer(LoadURL);

    return (
      <article style={styles}>
        <ConnectedInterface />
        <AudioPlayer />
      </article>
    );
  })
  .add('Initial Display of Hidden', () => {
    const { withPlayer, AudioPlayer } = createAudioPlayer();
    const ConnectedInterface = withPlayer(LoadURL);

    return (
      <article style={styles}>
        <AudioPlayer />
      </article>
    );
  })
  .add('Demo Unstyled with Custom Class', () => {
    const { withPlayer, AudioPlayer } = createAudioPlayer();
    const ConnectedInterface = withPlayer(LoadURL);

    return (
      <article style={styles}>
        <ConnectedInterface />
        <h5 className="h5-roboto">Audio Player</h5>
        <AudioPlayer className="customAudioClass" />
      </article>
    );
  })
  .add('Multiple Instances', () => {
    const FirstInstance = createAudioPlayer();
    const SecondInstance = createAudioPlayer();

    const FirstInterface = FirstInstance.withPlayer(LoadURL);
    const SecondInterface = SecondInstance.withPlayer(LoadURL);

    return (
      <article style={styles}>
        <h1 className="h1-roboto">First Instance</h1>
        <h2 className="h2-roboto">First Interface</h2>
        <FirstInterface />
        <h2 className="h2-roboto">First Player</h2>
        <FirstInstance.AudioPlayer
          trackInfo={false}
          volume={false}
          meter={false}
          className="myClass"
        />
        <h1 className="h1-roboto">Second Instance</h1>
        <h2 className="h2-roboto">Second Interface</h2>
        <SecondInterface />
        <h2 className="h2-roboto">Second Player</h2>
        <SecondInstance.AudioPlayer
          trackInfo={false}
          volume={false}
          meter={false}
          className="myOtherClass"
        />
      </article>
    );
  });
