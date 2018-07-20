import { tap } from 'rxjs/operators';
import S3 from './aws-sdk';

const cloudFrontResponse = (req, res) => ({ $sharp, info, ...ctx }) => {
  S3.upload({
    Bucket: info.Bucket,
    Key: `${info.key}.${info.format}`,
    Body: $sharp,
    ContentType: info.contentType,
    CacheControl: 'max-age=31536000',
  })
    .promise()
    .then(() => {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      res.write(
        JSON.stringify({
          cloudFrontURL: info.cloudFrontURL,
        })
      );

      res.end();
    })
    .catch((error) => {
      res.writeHead(500, {
        'Content-Type': 'application/json',
      });
      res.write(
        JSON.stringify({
          error: 'Error writing to S3',
        })
      );

      res.end();
    });
};

const sharpResponse = (req, res) => ({ $sharp, info, ...ctx }) => {
  // perform all of the http response stuff like headers and chunk our encoding
  // lots of nice side effects
  // set response headers
  res.writeHead(200, {
    'Content-Type': info.contentType,
    'Cache-Control': 'max-age=31536000',
    'Transfer-Encoding': 'chunked',
  });

  $sharp.pipe(res);
};

export { cloudFrontResponse, sharpResponse };
