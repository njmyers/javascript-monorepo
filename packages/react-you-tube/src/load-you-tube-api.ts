import createScriptLoader from '@njmyers/script-loader';
import { YouTubeWindow } from './types';

const loadYouTubeAPI = createScriptLoader({
  id: 'youtube',
  src: 'https://www.youtube.com/iframe_api',
  initialize: (window: YouTubeWindow) =>
    new Promise(res => {
      window.onYouTubeIframeAPIReady = (): void => res(window.YT);
    }),
});

export default loadYouTubeAPI;
