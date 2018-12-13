import { kebabName } from "../args";
import make from "../make";
// templates
import {
  reduxActionsFile,
  reduxReducerFile,
  reduxActionsTestFile,
  reduxReducerTestFile,
  reduxIndexFile
} from "../templates";

const reduxProgram = program => {
  program
    .command("redux [redux-names...]")
    .option("-f, --file", "create boilerplate files and index exports", false)
    .option("-t, --test", "create a test file", false)
    .option("-w, --flow", "create a flow types file and use pragmas", false)
    .option("-a, --all", "create all possible files", false)
    .action((...args) => {
      const [options, functions] = args.reverse();

      functions.forEach(component => {
        const kebab = kebabName(component);

        if (options.file || options.all) {
          make(component, reduxActionsFile, `${kebab}-actions.js`);
          make(component, reduxReducerFile, `${kebab}-reducer.js`);
          make(component, reduxIndexFile, `index.js`);
        }

        // optional files
        if (options.test || options.all) {
          make(
            component,
            reduxActionsTestFile,
            `__tests__/${kebab}-actions.test.js`
          );
          make(
            component,
            reduxReducerTestFile,
            `__tests__/${kebab}-reducer.test.js`
          );
        }
      });
    });
};

export default reduxProgram;
