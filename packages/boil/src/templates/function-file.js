/** @flow */
import { camelName } from "../args";

const functionFile = kebab => `/** @flow */
const ${camelName(kebab)} = () => null

export default ${camelName(kebab)}
`;

export default functionFile;
