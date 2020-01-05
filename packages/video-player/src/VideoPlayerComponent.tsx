// @ts-nocheck
import React, { Component } from 'react';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // check for which video codecs browser supports and save to redux state
    this.props.saveVideoEncoding();

    // callback to load HTML5 video element into redux
    // how to create HTML5 video element directly in redux?
    this.props.loadVideoPlayer();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.props.resizeVideoPlayer();
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  render() {
    return (
      <figure
        id="video_container"
        className="video-container"
        style={this.props.videoPlayer.playerStyle}
      >
        <div className="video-backdrop" />
        <video
          className="video-player"
          id="video_player"
          name={!this.props.videoPlayer.playing ? 'play' : 'pause'}
          onClick={this.props.videoButton}
          src={this.props.videoPlayer.src}
        />
        <Controls
          callback={this.props.videoButton}
          state={this.props.videoPlayer}
        />
      </figure>
    );
  }
}

function Controls(props) {
  // three options can't use ternary operator
  let volumeIcon;
  if (props.state.muted) volumeIcon = 'volume-off';
  else if (props.state.volume < 70) volumeIcon = 'volume-down';
  else volumeIcon = 'volume-up';

  return (
    <span className="video-controls">
      <span>
        <Button
          name={!props.state.playing ? 'play' : 'pause'}
          icon={!props.state.playing ? 'play' : 'pause'}
          callback={props.callback}
        />
        <Button name="stop" icon="stop" callback={props.callback} />
      </span>
      <p className="video-clock">
        {props.state.clock} | {props.state.length}
      </p>
      <div className="video-meter">
        <input
          type="range"
          name="seek"
          value={props.state.seek}
          min="0"
          max="1000"
          onChange={props.callback}
        />
      </div>
      <span>
        <Button name="fullscreen" icon="expand" callback={props.callback} />
        <Button name="mute" icon={volumeIcon} callback={props.callback} />
      </span>
      <div className="video-volume-meter">
        <input
          className="video-volume"
          name="volume"
          type="range"
          value={props.state.volume}
          min="0"
          max="100"
          onChange={props.callback}
        />
      </div>
    </span>
  );
}

export default VideoPlayer;

function Button(props) {
  const icon = `fa fa-${props.icon}`;
  const classes = props.className || 'video-button';
  const mergeClasses = `${icon} ${classes}`;

  return (
    <button
      className={mergeClasses}
      name={props.name}
      onClick={props.callback}
    />
  );
}
