/** @flow */
import { componentName } from "../args";

const reactIndexFile = kebab => `/** @flow */
export { default } from './${componentName(kebab)}'
export * from './types'
`;

export default reactIndexFile;
