// @flow
import sharp from 'sharp';
import { map } from 'rxjs/operators';

/** validate the blur amount to be between valid sigma values */
const validateBlur = (sigma: string | number) =>
  Math.min(Math.max(0.3, Number(sigma)), 1000);

/** validate the image resizing parameters */
const validateResize = (resize) => {
  const { w, h } = resize;

  return h ? [Number(w), Number(h)] : [Number(w)];
};

/** validate the requested image format and fallback to jpeg */
const validateFormat = (format: string) => {
  return format !== 'png' &&
    format !== 'jpeg' &&
    format !== 'tiff' &&
    format !== 'webp'
    ? 'jpeg'
    : format;
};

const validateCrop = (crop) => {
  return crop;
};

/**
 * adds another sharp function to the pipeline if it matches a query entry
 * @param  {object} Sharp previous sharp object to add a function to
 * @param  {object} entry single key/value pair correlating to a sharp function
 * @return {object}       sharp object with the chained function
 */
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

/**
 * create a sharp pipeline from a query object
 * @param  {object} query qs parsed url query object
 * @return {stream}       a sharp pipeline to pipe into
 */
const pipeline = (query) =>
  Object.entries(query).reduce((prevSharp, entry) => {
    return composePipeline(prevSharp, entry);
  }, sharp());

/**
 * Maps a sharp image stream to the observable ctx object
 * @return {object}       the ctx of the observable request
 */
const createSharpStream = map(({ image, info, ...ctx }) => ({
  ...ctx,
  image,
  info,
  $sharp: image.data.pipe(pipeline(info.query)),
}));

export default createSharpStream;

export { validateFormat };
