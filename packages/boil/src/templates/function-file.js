import { camelName } from "../args";

const functionFile = kebab =>
  `const ${camelName(kebab)} = () => null

export default ${camelName(kebab)};
`;

export default functionFile;
