import * as React from 'react';
import { connect } from 'react-redux';
import { equals, compose } from 'smalldash';
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
  getClassName = () => {
    return this.props.className
      ? this.props.className
      : 'audioPlayer_container';
  };

  render() {
    return (
      <aside ref={this.childRef} className={this.getClassName()}>
        <div className="audioPlayer">
          <PlayPauseNext sizes={this.props.sizes} />
          <TrackInfo sizes={this.props.sizes} />
          <Meter sizes={this.props.sizes} />
          <Volume sizes={this.props.sizes} />
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  playerSize: (value) => dispatch(playerSize(value)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withSize({ component: true, mobile: true })
)(AudioCore);
