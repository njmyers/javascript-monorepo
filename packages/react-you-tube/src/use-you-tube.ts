import * as React from 'react';
import isEqual from 'lodash.isequal';
import loadYouTubeAPI from './load-you-tube-api';
// types
import { Props } from './types';

function useYouTube(node: HTMLElement | null, props: Props): YT.Player | null {
  const [safeProps, setSafeProps] = React.useState(props);
  const [player, setPlayer] = React.useState<YT.Player | null>(null);

  React.useEffect(() => {
    if (!isEqual(props, safeProps)) {
      setSafeProps(props);
    }
  }, [props, safeProps]);

  React.useEffect(() => {
    const load = async (): Promise<void> => {
      if (player) {
        return;
      }

      if (!node) {
        return;
      }

      try {
        const YT = await loadYouTubeAPI();
        new YT.Player(node, {
          ...safeProps,
          events: {
            onReady: (e): void => setPlayer(e.target),
            ...safeProps.events,
          },
        });
      } catch (e) {
        setPlayer(null);
      }
    };

    void load();
  }, [node, player, safeProps]);

  return player;
}

export default useYouTube;
