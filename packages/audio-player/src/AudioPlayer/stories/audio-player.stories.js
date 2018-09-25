import * as React from 'react';
import { storiesOf } from '@storybook/react';
import createAudioPlayer from '../create-audio-player';

const { withPlayer, AudioPlayer } = createAudioPlayer('audioPlayer');

class Interface extends React.Component {
  componentDidMount() {
    this.props.loadAudioTrack({
      name: 'Sinkin Soon',
      artist: 'Ex Fab',
      urls: ['https://blatboy.s3.amazonaws.com/2017/11/SinkinSoonEx.mp3'],
    });

    this.props.audioPlayerPause();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.audioPlayerStart}>
          Externally Mapped Start Button
        </button>
        <button onClick={this.props.audioPlayerStop}>
          Externally Mapped Stop Button
        </button>
      </div>
    );
  }
}

const ConnectedInterface = withPlayer(Interface);

storiesOf('Audio Player', module)
  .add('Demo Default Configuration', () => (
    <article>
      <code>{JSON.stringify(Interface)}</code>
      <h3>This is a seperate button</h3>
      <ConnectedInterface />
      <AudioPlayer />
    </article>
  ))
  .add('Demo Unstyled with Custom Class', () => (
    <article>
      <ConnectedInterface />
      <AudioPlayer className="customAudioClass" />
    </article>
  ));
