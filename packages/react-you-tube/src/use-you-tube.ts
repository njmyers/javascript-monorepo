import { useEffect, useState } from 'react';
import loadYouTubeAPI from './load-you-tube-api';
// types
import { Props } from './types';

function useYouTube(ref: React.RefObject<HTMLElement>, props: Props) {
  const [player, setPlayer] = useState<YT.Player | null>(null);

  useEffect(() => {
    const load = async () => {
      if (player) {
        return;
      }

      if (!(ref && ref.current)) {
        return;
      }

      try {
        const YT = await await loadYouTubeAPI();
        new YT.Player(ref.current, {
          events: {
            onReady: e => setPlayer(e.target),
            ...(props.events || {}),
          },
          ...props,
        });
      } catch (e) {
        setPlayer(null);
      }
    };

    load();
  }, [player, ref]);

  return player;
}

export default useYouTube;
