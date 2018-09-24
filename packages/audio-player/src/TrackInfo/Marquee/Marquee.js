import * as React from 'react';
import './marquee.sass';

function Marquee(props) {
  const speed = props.speed ? props.speed : 4;
  const state = props.state ? props.state : 'running';

  // some fonts need this adjustment
  const lineHeight = props.lineHeight ? props.lineHeight : null;

  const style = {
    animationDuration: `${speed}s`,
    animationPlayState: state,
    lineHeight,
  };

  return (
    <div className="marquee_container">
      <div className="marquee">
        <span className="marquee_span" style={style}>
          {props.text}
        </span>
      </div>
    </div>
  );
}

export default Marquee;
