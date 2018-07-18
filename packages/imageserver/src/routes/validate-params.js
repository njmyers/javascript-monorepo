/** validate the blur amount to be between valid sigma values */
export const validateBlur = (sigma: string | number) =>
  Math.min(Math.max(0.3, Number(sigma)), 1000);

/** validate the image resizing parameters */
export const validateResize = (resize) => {
  const { w, h } = resize;

  return h ? [Number(w), Number(h)] : [Number(w)];
};

/** validate the requested image format and fallback to jpeg */
export const validateFormat = (format) => {
  return format !== 'png' &&
    format !== 'jpeg' &&
    format !== 'tiff' &&
    format !== 'webp'
    ? 'jpeg'
    : format;
};

export const validateCrop = (crop) => {
  return crop;
};

export const validateQuery = (query) => {};
