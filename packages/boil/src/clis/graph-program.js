import { kebabName } from "../args";
import make from "../make";
// templates
import { graphFile, graphIndexFile } from "../templates";

const graphProgram = program => {
  program
    .command("graphql [graphql-names...]")
    .option("-t, --test", "create a test file", false)
    .option("-s, --schema", "create a schema file", false)
    .option("-a, --all", "create all possible files", false)
    .action((...args) => {
      const [options, functions] = args.reverse();

      functions.forEach(component => {
        const kebab = kebabName(component);

        make(component, graphFile, `${kebab}.graphql`);

        if (options.schema || options.all) {
          make(component, graphIndexFile, `schema.js`);
        }

        // optional files
        if (options.test) {
          // make(component, functionTestFile, `__tests__/${kebab}.test.js`);
        }
      });
    });
};

export default graphProgram;
