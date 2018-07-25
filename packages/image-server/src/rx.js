import http from 'http';
import { Observable, Subject, of, pipe } from 'rxjs';
import { map, tap, shareReplay, merge, filter } from 'rxjs/operators';

import gatherInfo from './gather-info';
import sharpFlow from './sharp/sharp-flow';
import { cloudFrontResponse, sharpResponse } from './response';

const app = ({ req, res }) => {
  // really the only parameter of the whole request here
  const ctx$ = of({ info: { url: req.url } }).pipe(
    ...gatherInfo,
    ...sharpFlow,
    tap((ctx) => {
      console.log(ctx.info.mode);
    })
  );

  ctx$
    .pipe(filter((ctx) => ctx.info.mode === 'development'))
    .subscribe(sharpResponse(req, res));

  ctx$
    .pipe(filter((ctx) => ctx.info.mode === 'production'))
    .subscribe(cloudFrontResponse(req, res));
};

const requests$ = new Subject();

requests$.subscribe(app);

const hostname = 'localhost';
const port = 3030;

http
  .createServer()
  .on('request', (req, res) => {
    requests$.next({ req, res });
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
