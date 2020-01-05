function ensureArray(arg) {
  return Array.isArray(arg) ? arg : [arg];
}

export default ensureArray;
