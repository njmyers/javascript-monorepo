import { componentName } from "../args";

const graphIndexFile = (kebab, options) =>
  `import ${componentName(kebab)} from './${kebab}.graphql'`;

export default graphIndexFile;
