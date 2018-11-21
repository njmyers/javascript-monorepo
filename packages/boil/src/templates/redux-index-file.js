/** @flow */
import { camelName } from "../args";

const reduxIndexFile = (kebab, options) => `export { default as ${camelName(
  kebab
)}Reducer } from './${kebab}-reducer'
export * from './${kebab}-reducer'
export * from './${kebab}-actions'
`;

export default reduxIndexFile;
