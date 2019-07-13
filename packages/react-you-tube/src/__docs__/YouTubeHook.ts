import React, { useState, useRef } from 'react';
import useYouTube from '../use-you-tube';

function HookYouTubeExample() {
  const [videoId, setVideoId] = useState('');
  const ref = useRef(null);
  const player = useYouTube(ref, {
    width: 640,
    height: 390,
    videoId: 'Z1BCujX3pw8',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  });

  return (
    <React.Fragment>
      <div ref={ref} />
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

export default HookYouTubeExample;
