import * as React from 'react';
import useYouTube from './use-you-tube';
// types
import { Props } from './types';

function YouTubeVideo({ onPlayer, ...props }: Props): JSX.Element {
  const [node, setNode] = React.useState(null);
  const player = useYouTube(node, props);

  React.useEffect(() => {
    if (onPlayer && player) {
      onPlayer(player);
    }
  }, [onPlayer, player]);

  const handleRef = React.useCallback(node => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  return <div ref={handleRef} />;
}

export default YouTubeVideo;
