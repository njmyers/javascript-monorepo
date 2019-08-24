import { componentName } from "../args";

const reactIndexFile = kebab =>
  `export { default } from './${componentName(kebab)}'
export * from './types'
`;

export default reactIndexFile;
