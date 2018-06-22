export const updateContentSize = (key) => (payload) => ({
  type: 'UPDATE_CONTENT_SIZE',
  key,
  payload,
});

export const updateOrientation = (payload) => ({
  type: 'UPDATE_ORIENTATION',
  key: 'orientation',
  payload,
});

export const updateIsMobile = (payload) => ({
  type: 'UPDATE_MOBILE',
  key: 'isMobile',
  payload,
});
