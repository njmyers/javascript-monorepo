import { Howl } from 'howler';
import { Track, State } from './audio-reducer';

/** Return the current global volume */
export function selectVolume(state: State): number {
  return state.volume;
}

/** Return the current global mute state */
export function selectMuted(state: State): boolean {
  return state.muted;
}

/** Return the current track */
export function selectCurrentTrack(state: State): Track | undefined {
  return state.tracks.length > 0 ? state.tracks[state.current] : undefined;
}

/** Return the previous track */
export function selectPreviousTrack(state: State): Track | undefined {
  return state.tracks.length > 0 ? state.tracks[state.previous] : undefined;
}

/* Return the current howl */
export function selectCurrentHowl(state: State): Howl | undefined {
  const track = selectCurrentTrack(state);
  return track ? track.howl : undefined;
}

/* Return the previous howl */
export function selectPreviousHowl(state: State): Howl | undefined {
  const track = selectPreviousTrack(state);
  return track ? track.howl : undefined;
}

/* Return the time of the current howl */
export function selectCurrentHowlTime(state: State): number | undefined {
  const howl = selectCurrentHowl(state);

  if (!howl) {
    return undefined;
  }

  const seek = howl.seek();
  return typeof seek === 'number' ? seek : undefined;
}

/* Return the duration of the current howl */
export function selectCurrentHowlDuration(state: State): number | undefined {
  const howl = selectCurrentHowl(state);
  return howl ? howl.duration() : undefined;
}

/* Return whether the current howl has ended */
export function selectCurrentHowlEnded(state: State): boolean | undefined {
  const howl = selectCurrentHowl(state);
  return howl ? !howl.playing() : undefined;
}

/* Return whether the current howl is loading ended */
export function selectCurrentHowlLoading(state: State): boolean | undefined {
  const howl = selectCurrentHowl(state);
  return howl ? !howl.state() : undefined;
}

/* Return whether the current howl has ended */
export function selectCurrentHowlPlaying(state: State): boolean | undefined {
  const howl = selectCurrentHowl(state);
  return howl ? howl.playing() : undefined;
}
