import { Track } from '../AudioCore';

/** Convert a string length to consistent marquee speed */
export function convertStringToMarqueeSpeed(string: string) {
  return Math.floor(string.length / 4);
}

/** Format numerical seconds as a string */
export function formatSeconds(seconds: number) {
  return seconds < 10 ? `0${seconds}` : seconds;
}

/** Format numerical time in seconds to a time string */
export function formatTime(seconds: number) {
  return !Number.isFinite(seconds)
    ? `${Math.floor(seconds / 60)}:${formatSeconds(Math.floor(seconds % 60))}`
    : '0:00';
}

/** Format track text based on available information */
export function formatTrackText(currentTrack: Track) {
  if (!currentTrack) {
    return '';
  }

  const { name, artist } = currentTrack;
  return name ? (artist ? `${name}: ${artist}` : name) : artist ? artist : '';
}
