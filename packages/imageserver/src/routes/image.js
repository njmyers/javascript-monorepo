// @flow
import express from 'express';
import Promise from 'bluebird';
import axios from 'axios';
import sharp from 'sharp';
import mime from 'mime';
import stream from 'stream';
// types
import type { Router, $Request, $Response } from 'express';
// libs
import {
  validateBlur,
  validateFormat,
  validateResize,
  validateCrop,
} from './validate-params';

import { getDomain } from '../lib/index';

import S3 from './aws-sdk';

// initialize router
const router: Router = express.Router();

type Query = {
  uri: string,
  resize?: {
    w?: number,
    h?: number,
  },
  blur?: number,
  format?: 'webp' | 'jpeg' | 'png',
};

type Info = {
  format: string,
  width: number,
  height: number,
  channels: number,
  premultiplied: boolean,
  size: number,
};

/**
 * https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html
 * @param  {[type]} originalUrl [description]
 * @return {[type]}             [description]
 */
const createValidAWSKey = (originalUrl) =>
  decodeURIComponent(originalUrl)
    // remove leading slash and ?
    .slice(2)
    .replace(/\[/gi, '(')
    .replace(/\]/gi, ')')
    .replace(/\&/gi, '_')
    .replace(/\=/gi, '-')
    .replace(/\//gi, '!')
    .replace(/\:/gi, '*');

/**
 * Converts an buffer to base64 image uri
 * @param  {[type]} data [description]
 * @param  {[type]} info [description]
 * @return {[type]}      [description]
 */
const bufferToBase64 = (data, info) =>
  `data:${mime.getType(info.format)};base64, ${data.toString('base64')}`;

const composePipeline = (Sharp, entry) => {
  switch (entry[0]) {
    case 'blur':
      return Sharp.blur(validateBlur(entry[1]));
    case 'resize':
      return Sharp.resize(...validateResize(entry[1]));
    case 'format':
      return Sharp.toFormat(validateFormat(entry[1]));
    case 'resize':
      return Sharp.rotate(entry[1]);
    case 'crop':
      return Sharp.crop(entry[1]);
    default:
      return Sharp;
  }
};

const Bucket = process.env.AWS_S3_BUCKET;
const CloudFront = process.env.AWS_CLOUDFRONT_CDN;

router.get('/', async (req: $Request, res: $Response) => {
  // get original coded url as unique identifier for AWS
  const { query, originalUrl } = req;
  // express supports automatic decoding of the URI component
  const { uri } = query;
  // gotta be an image...
  if (!uri) res.status(404).send({ error: 'you must supply an input uri' });

  // get the keys and cloudfront urls
  const key = createValidAWSKey(originalUrl);
  const format = validateFormat(query.format);
  const cloudFrontURL = `${CloudFront}/${key}.${format}`;

  try {
    // check if cached
    const exists = await axios.get(cloudFrontURL, {
      validateStatus: (status) => status >= 200 && status < 500,
      responseType: 'stream',
    });

    if (Number(exists.status) === 200) {
      res.set(exists.headers);
      // exists.data.pipe(res);

      exists.data.on('data', (chunk) => {
        console.log(chunk);
        // res.write(chunk);
      });

      exists.data.on('error', (error) => {
        console.log(error);
        // res.sendStatus(404);
      });

      exists.data.on('end', () => {
        console.log('end');
        // res.status(200).end();
      });

      // res.end();
    } else {
      // get original image
      const original = await axios.get(uri, { responseType: 'stream' });

      // set up sharp pipeline based on options
      const pipeline = Object.entries(query).reduce((prevSharp, entry) => {
        return composePipeline(prevSharp, entry);
      }, sharp());

      // maintain reference to stream to split into multiple outputs
      const $stream = original.data.pipe(pipeline);

      const contentType = mime.getType(format);

      // send the stream as base64 image data
      // const { data, info } = await stream.toBuffer({ resolveWithObject: true });
      // const { format: extension, width, height, size } = info;
      // const contentType = mime.getType(extension);

      res.set({
        'Content-Type': contentType,
        'Cache-Control': 'max-age=31536000',
        'Transfer-Encoding': 'chunked',
      });

      $stream.on('data', (chunk) => {
        res.write(chunk);
      });

      $stream.on('error', (error) => {
        res.sendStatus(404);
      });

      $stream.on('end', () => {
        res.status(200).end();
      });

      const s3response = await S3.upload({
        Bucket,
        Key: `${key}.${format}`,
        Body: $stream,
        ContentType: contentType,
        CacheControl: 'max-age=31536000',
      }).promise();
    }

    /// hope and pray it went to amazon?
  } catch (error) {
    console.log(error);
    // res.sendStatus(404);
  }
});

export default router;
