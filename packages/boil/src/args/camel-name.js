const { kebabToCamel } = require("smalldash");

const camelName = arg => kebabToCamel(arg);

export default camelName;
