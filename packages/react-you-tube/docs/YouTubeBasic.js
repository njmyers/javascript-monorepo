import React from 'react';
import YouTube from '../src/YouTube';

function YouTubeBasic() {
  return (
    <YouTube
      width="640"
      height="390"
      videoId="Z1BCujX3pw8"
      playerVars={{ autoplay: 0, controls: 1 }}
    />
  );
}

export default YouTubeBasic;
