import createScriptLoader from '@njmyers/script-loader';

const youTubeIframeAPIPromise = new Promise<Window['YT']>((resolve, reject) => {
  if (typeof window !== 'undefined') {
    window.onYouTubeIframeAPIReady = (): void => {
      resolve(window.YT);
    };
  } else {
    reject(new Error('YouTube Iframe API not available in this environment'));
  }
});

const loadYouTubeAPI = createScriptLoader({
  id: 'youtube',
  src: '//www.youtube.com/iframe_api',
  initialize: (): Promise<Window['YT']> => youTubeIframeAPIPromise,
});

export default loadYouTubeAPI;
