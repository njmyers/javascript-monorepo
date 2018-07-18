import https from 'https';
import stream from 'stream';
import { Observable } from 'rxjs';
import { mergeMap, tap, map } from 'rxjs/operators';
import getDomain from './lib/get-domain';

import { cancel } from './rx';

const request$ = (options) => {
  console.time('request$');

  return new Observable((observer) => {
    const req = https.request(options, (response) => {
      let body = '';

      observer.next({
        headers: response.headers,
        status: response.statusCode,
      });

      response.on('data', (chunk) => {
        body += chunk;
      });

      response.on('end', () => {
        observer.complete();
        console.timeEnd('request$');
      });
    });

    req.on('error', (error) => {
      observer.error(error);
    });

    return req.end();
  });
};

const getCloudFront = mergeMap(({ info, ...ctx }) =>
  request$({
    hostname: getDomain(info.CloudFront),
    method: 'HEAD',
    path: '/' + info.key + '.' + info.format,
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    },
  }).pipe(
    map((response) => {
      return {
        ...ctx,
        info,
        cloudfront: response,
        use: response.status === 200 ? 'cloudfront' : 'sharp',
      };
    })
  )
);

const startCloudFrontTimer = tap(() => {
  console.time('cf request');
});

const endCloudFrontTimer = tap(() => {
  console.timeEnd('cf request');
});

export default [startCloudFrontTimer, getCloudFront, endCloudFrontTimer];
