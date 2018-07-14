import React, { Component } from 'react';
import { compose } from 'redux';
import { equals } from 'smalldash';
import { AudioMeter, PlayPauseNext, TrackInfo, Volume } from './Controls';
import Size from 'react-size-components';

import './audio.sass';

class Audio extends Component {
  componentWillReceiveProps(nextProps) {
    if (!equals(nextProps.sizes.component, this.props.sizes.component)) {
      this.props.playerSize(nextProps.sizes.component);
    }
  }

  render() {
    return (
      <aside className="audio-player-container">
        <article className="player">
          <PlayPauseNext />
          <TrackInfo />
          <AudioMeter />
          <Volume />
        </article>
      </aside>
    );
  }
}

const DisplayWrapper = (Wrapped) => (props) => {
  return props.display ? <Wrapped {...props} /> : null;
};

export default compose(
  DisplayWrapper,
  Size({ component: true })
)(Audio);
