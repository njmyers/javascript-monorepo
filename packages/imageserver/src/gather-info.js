require('dotenv').config();

import qs from 'qs';
import mime from 'mime';
import { map, tap } from 'rxjs/operators';
import { validateFormat } from './sharp/create-sharp-stream';
import memoize from 'fast-memoize';

const CloudFront = process.env.AWS_CLOUDFRONT_CDN;
const Bucket = process.env.AWS_S3_BUCKET;

const env = memoize(
  map(({ info, ...ctx }) => {
    const query = qs.parse(info.url.slice(1), { ignoreQueryPrefix: true });
    const key = decodeURIComponent(info.url)
      // remove leading slash and ?
      .slice(2)
      .replace(/\[/gi, '(')
      .replace(/\]/gi, ')')
      .replace(/\&/gi, '_')
      .replace(/\=/gi, '-')
      .replace(/\//gi, '!')
      .replace(/\:/gi, '*');

    const format = validateFormat(query.format);
    const contentType = mime.getType(format);
    const cloudFrontURL = `${CloudFront}/${key}.${format}`;
    const mode = query.mode ? query.mode : 'development';

    return {
      ...ctx,
      info: {
        ...info,
        CloudFront,
        Bucket,
        query,
        key,
        format,
        contentType,
        cloudFrontURL,
        mode,
      },
    };
  })
);

const logVariables = tap(({ info, ...ctx }) => {
  console.log(info);
});

const gatherInfo = [env, logVariables];

export default gatherInfo;
