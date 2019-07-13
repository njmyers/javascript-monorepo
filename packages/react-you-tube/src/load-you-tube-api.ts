import createScriptLoader from '@njmyers/script-loader';

interface YouTubeWindow extends Window {
  onYouTubeIframeAPIReady?: () => void;
  YT?: {
    player: YT.Player;
  };
}

const loadYouTubeAPI = createScriptLoader({
  id: 'youtube',
  src: 'https://www.youtube.com/iframe_api',
  initialize: (window: YouTubeWindow) =>
    new Promise(res => {
      window.onYouTubeIframeAPIReady = () => res(window.YT);
    }),
});

export default loadYouTubeAPI;
