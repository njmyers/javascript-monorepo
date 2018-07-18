const validateKey = (container) => {
  if (!container.Key)
    throw new Error(
      'Your object does not contain a Key property. S3 object must contain a Key.'
    );
  return container;
};

export default validateKey;
