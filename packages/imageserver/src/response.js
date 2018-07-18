import { tap } from 'rxjs/operators';
import zlib from 'zlib';
import stream from 'stream';

import S3 from './aws-sdk';

const cloudFrontResponse = (req, res) => ({ info, ...ctx }) => {
  res.writeHead(301, {
    Location: info.cloudFrontURL,
    'Cache-Control': 'max-age=31536000',
  });

  res.end();
  console.log('response completed');
};

const sharpResponse = (req, res) => ({ $sharp, info, ...ctx }) => {
  console.log('sharp response');
  // perform all of the http response stuff like headers and chunk our encoding
  // lots of nice side effects
  // set response headers
  res.writeHead(200, {
    'Content-Type': info.contentType,
    'Cache-Control': 'max-age=31536000',
    'Transfer-Encoding': 'chunked',
    // 'Accept-Encoding': 'gzip',
  });

  const gzip = zlib.createGzip();

  const $response = new stream.PassThrough();
  const $s3 = new stream.PassThrough();

  $sharp.pipe($response);
  $sharp.pipe($s3);

  $response.pipe(res);

  console.log('response completed');

  console.time('s3');

  const s3response = S3.upload({
    Bucket: info.Bucket,
    Key: `${info.key}.${info.format}`,
    Body: $s3,
    ContentType: info.contentType,
    CacheControl: 'max-age=31536000',
  })
    .promise()
    .then(() => {
      console.log('s3 completed');
      console.timeEnd('s3');
    })
    .catch((error) => {
      console.error(error);
    });
};

export { cloudFrontResponse, sharpResponse };
