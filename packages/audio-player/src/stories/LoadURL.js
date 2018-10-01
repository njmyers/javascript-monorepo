import * as React from 'react';
import uuid from 'uuid/v1';
import { Form } from '@njmyers/component-library';
import './load-url.sass';

class LoadURL extends React.Component {
  state = {
    url: 'https://blatboy.s3.amazonaws.com/2018/03/BuddySweetheartUke.mp3',
    artist: 'Artist',
    name: 'Track #1',
  };

  componentDidMount() {
    this.props.audioPlayerShow();
  }

  componentWillUnmount() {
    this.props.audioPlayerDestroy();
  }

  onChange = ({ currentTarget: { name, value } }) =>
    this.setState((state) => ({ [name]: value }));

  onClick = () =>
    this.props.loadAudioTrack({
      name: this.state.name,
      artist: this.state.artist,
      urls: [this.state.url],
      id: uuid(),
    });

  render() {
    return (
      <div className="interface">
        <h5 classs="h5">Seperately Mapped Interface</h5>
        <Form.Input
          name="url"
          label="Track URL"
          value={this.state.url}
          onChange={this.onChange}
        />
        <Form.Input
          name="name"
          label="Track Name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <Form.Input
          name="artist"
          label="Artist Name"
          value={this.state.artist}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>Load URL</button>
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

export default LoadURL;
