import * as React from 'react';
import withSize from 'react-size-components';
// components
import TrackInfo from '../TrackInfo';
import Meter from '../Meter';
import PlayPauseNext from '../Controls';
import Volume from '../Volume';
// actions
import { playerSize } from './audio-actions';
// assets
import './library';
// styles
import './audio.sass';
import './range.sass';

class AudioCore extends React.Component {
  static defaultProps = {
    classPrefix: 'audioPlayer',
  };

  passedProps = () => ({
    classPrefix: this.props.classPrefix,
    sizes: this.props.sizes,
  });

  render() {
    return (
      <aside
        ref={this.props.childRef}
        className={`${this.props.classPrefix}_container`}
      >
        <div className={this.props.classPrefix}>
          <PlayPauseNext {...this.passedProps()} />
          <TrackInfo {...this.passedProps()} />
          <Meter {...this.passedProps()} />
          <Volume {...this.passedProps()} />
        </div>
      </aside>
    );
  }
}

export default withSize({ component: true, mobile: true })(AudioCore);
