/**
 * @param {string} prop which prop to leave on the object
 * @param {object} container the s3 valid container object
 */
const stripAllExcept = (prop) => (container) => ({ [prop]: container.prop });

export default stripAllExcept('Key');
