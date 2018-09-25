import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import scale from './scale';
// styles
import './volume.sass';

class Volume extends React.Component {
  onChange = ({ currentTarget: { value } }) => {
    this.props.setMute(false);
    this.props.setVolume(value);
  };

  onClick = () => {
    this.props.setMute(!this.props.muted);
  };

  getIcon = () => {
    return this.props.muted || this.props.volume === 0
      ? 'volume-off'
      : this.props.volume < 0.5
        ? 'volume-down'
        : 'volume-up';
  };

  render() {
    return (
      !this.props.sizes.mobile && (
        <div className={`${this.props.classPrefix}_volume`}>
          <label
            htmlFor="volume"
            className={`${this.props.classPrefix}_mute`}
            onClick={this.onClick}
          >
            <FontAwesomeIcon icon={this.getIcon()} size="1x" />
          </label>
          <input
            type="range"
            min="0"
            max={scale}
            name="volume"
            id="volume"
            value={this.props.volume}
            onChange={this.onChange}
          />
        </div>
      )
    );
  }
}

export default Volume;
