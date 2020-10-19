import React from 'react';
import YouTube from '../src/YouTube';

const videoIds = [
  'Z1BCujX3pw8',
  'ue80QwXMRHg',
  'QwievZ1Tx-8',
  'pWdKf3MneyI',
  'UUkn-enk2RU',
];

function YouTubeMultiple() {
  return (
    <div>
      {videoIds.map(videoId => {
        return (
          <YouTube
            key={videoId}
            width="640"
            height="390"
            videoId={videoId}
            playerVars={{ autoplay: 0, controls: 1 }}
          />
        );
      })}
    </div>
  );
}

export default YouTubeMultiple;
