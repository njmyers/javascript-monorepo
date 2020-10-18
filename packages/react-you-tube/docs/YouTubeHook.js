import React, { useState } from 'react';
import useYouTube from '../src/use-you-tube';

function YouTubeHook() {
  const [videoId, setVideoId] = useState('');
  const [node, setNode] = React.useState(null);
  const handleRef = React.useCallback(node => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  const player = useYouTube(node, {
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
      <div ref={handleRef} />
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

export default YouTubeHook;
