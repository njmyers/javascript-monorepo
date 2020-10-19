import createScriptLoader from '@njmyers/script-loader';
import YouTubeReady from './YouTubeReady';

const youTubeReady = new YouTubeReady();
const loadYouTubeAPI = createScriptLoader({
  id: 'youtube',
  src: '//www.youtube.com/iframe_api',
  initialize: (): Promise<Window['YT']> => youTubeReady.subscribe(),
});

export default loadYouTubeAPI;
