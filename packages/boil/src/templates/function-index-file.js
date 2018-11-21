/** @flow */
import { camelName } from "../args";

const functionIndexFile = kebab =>
  `export { default as ${camelName(kebab)} } from './${kebab}'`;

export default functionIndexFile;
