const validateNumber = (base) => (unknown) => {
  const type = typeof unknown;
  return type === 'number'
    ? unknown
    : type === 'string'
      ? parseInt(unknown, base)
      : 0;
};

export default validateNumber;
