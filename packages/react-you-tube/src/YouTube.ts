import React, { useEffect, useState, useRef } from 'react';
import loadYouTubeAPI from './load-you-tube-api';

function YouTube({ onPlayer, ...props }) {
  const [YT, setYT] = useState(null);
  const [player, setPlayer] = useState(null);
  const node = useRef(null);

  useEffect(() => {
    const load = async () => {
      if (YT && player) {
        return;
      }

      try {
        const YT = await await loadYouTubeAPI();
        setYT(YT);
      } catch (e) {
        setPlayer(null);
      }
    };

    load();
  }, [YT]);

  useEffect(() => {
    if (player) {
      return;
    }

    if (!node || !node.current || !YT || !YT.Player) {
      return;
    }

    const p = new YT.Player(node.current, props);
    setPlayer(p);

    if (onPlayer) {
      onPlayer(p);
    }
  }, [YT, player, node]);

  return <div ref={node} />;
}

export default YouTube;
