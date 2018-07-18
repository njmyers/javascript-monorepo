import http from 'http';
import zlib from 'zlib';
// import memoize from 'memoize';
import compression from 'compression';
import { Observable, Subject, of, pipe } from 'rxjs';
import { map, tap, shareReplay, merge, filter } from 'rxjs/operators';

import gatherInfo from './gather-info';
import cloudFront from './cloud-front';
import sharpFlow, { validateFormat } from './sharp/sharp-flow';
import { cloudFrontResponse, sharpResponse } from './response';

const logger = tap(({ use, info }) => {
  console.log(`
    method used: ${use}
    cached URL: ${info.cloudFrontURL}
  `);

  console.timeEnd('rxjs');
});

const startLogger = tap(() => {
  console.log('\n...............\nresponse started');
  console.time('rxjs');
  console.time('request');
});

const app = ({ req, res }) => {
  // really the only parameter of the whole request here
  const ctx$ = of({ info: { url: req.url } }).pipe(
    startLogger,
    ...gatherInfo,
    ...cloudFront,
    logger,
    shareReplay(10000)
  );

  ctx$
    .pipe(
      filter(({ use }) => use === 'sharp'),
      ...sharpFlow
    )
    .subscribe(sharpResponse(req, res));

  ctx$
    .pipe(filter(({ use }) => use === 'cloudfront'))
    .subscribe(cloudFrontResponse(req, res));
};

const requests$ = new Subject();

requests$.subscribe(app);

const hostname = 'localhost';
const port = 3000;

http
  .createServer()
  .on('request', (req, res) => {
    requests$.next({ req, res });
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });
