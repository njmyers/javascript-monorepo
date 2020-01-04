import React, { useRef, useEffect } from 'react';
import useYouTube from './use-you-tube';
// types
import { Props } from './types';

function YouTubeVideo({ onPlayer, ...props }: Props): React.FC<Props> {
  const node = useRef<HTMLDivElement>(null);
  const player = useYouTube(node, props);

  useEffect(() => {
    if (onPlayer && player) {
      onPlayer(player);
    }
  }, [player]);

  return <div ref={node} />;
}

export default YouTubeVideo;
