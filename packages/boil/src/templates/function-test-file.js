import { camelName } from "../args";

const functionTestFile = kebab => `import ${camelName(
  kebab
)} from '../${kebab}';

describe('it works', () => {
  test('it is a function ', () => {
    expect(typeof ${camelName(kebab)}).toBe('function');
  });

  test('it runs without crashing', () => {
    expect(${camelName(kebab)}()).toMatchSnapshot();
  });
});
`;

export default functionTestFile;
