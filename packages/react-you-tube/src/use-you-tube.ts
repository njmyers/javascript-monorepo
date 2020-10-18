import { useEffect, useState } from 'react';
import loadYouTubeAPI from './load-you-tube-api';
// types
import { Props } from './types';

function useYouTube(node: HTMLElement | null, props: Props): YT.Player | null {
  const [player, setPlayer] = useState<YT.Player | null>(null);

  useEffect(() => {
    const load = async (): Promise<void> => {
      if (player) {
        return;
      }

      if (!node) {
        return;
      }

      try {
        const YT = await loadYouTubeAPI();
        void new YT.Player(node, {
          events: {
            onReady: (e): void => setPlayer(e.target),
            ...(props.events || {}),
          },
          ...props,
        });
      } catch (e) {
        setPlayer(null);
      }
    };

    void load();
  }, [player, node, props]);

  return player;
}

export default useYouTube;
