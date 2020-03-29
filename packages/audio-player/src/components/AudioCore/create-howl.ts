import { Howl } from 'howler';

function createHowl(...src: string[]): Howl {
  return new Howl({
    loop: false,
    autoplay: false,
    html5: true,
    preload: true,
    src: src.flat(1),
  });
}

export default createHowl;
