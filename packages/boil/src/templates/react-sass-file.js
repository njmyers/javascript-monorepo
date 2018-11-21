/** @flow */
import { camelName } from "../args";

const reactSassFile = kebab => `.${camelName(kebab)}
  margin: 0
`;

export default reactSassFile;
