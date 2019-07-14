import * as React from 'react';
import './marquee.sass';

function Marquee({ speed, state, lineHeight, text }) {
  const style = {
    animationDuration: `${speed}s`,
    animationPlayState: state,
    lineHeight,
  };

  return (
    <div className="marquee_container">
      <div className="marquee">
        <span className="marquee_span" style={style}>
          {text}
        </span>
      </div>
    </div>
  );
}

Marquee.defaultProps = {
  speed: 4,
  state: 'running',
  lineHeight: null,
  text: '',
};

export default Marquee;
