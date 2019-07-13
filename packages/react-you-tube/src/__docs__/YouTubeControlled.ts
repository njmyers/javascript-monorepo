import React, { useState } from 'react';
import YouTube from '../YouTube';

function ControlledYouTube() {
  const [player, setPlayer] = useState(null);
  const [videoId, setVideoId] = useState('');

  return (
    <React.Fragment>
      <YouTube
        width="640"
        height="390"
        videoId="Z1BCujX3pw8"
        playerVars={{ autoplay: 0, controls: 1 }}
        onPlayer={player => setPlayer(player)}
      />
      <div>
        <label className="sans">Enter Video ID</label>
        <input
          name="videoId"
          value={videoId}
          onChange={e => setVideoId(e.target.value)}
        />
        <button onClick={() => player.loadVideoById(videoId)}>
          <span className="button_text-sans">Change Video</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default ControlledYouTube;
