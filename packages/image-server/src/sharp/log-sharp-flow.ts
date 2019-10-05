import { tap } from 'rxjs/operators';

export const startSharpTimer = tap((ctx) => {
  console.time('sharp');
});

export const endSharpTimer = tap((ctx) => {
  console.timeEnd('sharp');
});
