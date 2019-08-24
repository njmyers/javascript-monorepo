import { componentName, camelName } from "../args";

const graphFile = (kebab, options) => {
  const TitleCase = componentName(kebab);
  const camelCase = camelName(kebab);

  return `type ${TitleCase} {

}

input ${TitleCase}UniqueInput {

}

input ${TitleCase}SearchInput {

}

extend type Query {
  ${camelCase}(input: ${TitleCase}UniqueInput): ${TitleCase}
  ${camelCase}s(input: ${TitleCase}SearchInput): [${TitleCase}]
}

input ${TitleCase}CreateInput {

}

input ${TitleCase}UpdateInput {

}

extend type Mutation {
  create${TitleCase}(input: ${TitleCase}CreateInput): ${TitleCase}
  update${TitleCase}(input: ${TitleCase}UpdateInput): ${TitleCase}
}
`;
};

export default graphFile;
