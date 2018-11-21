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
    .option("-f, --flow", "add flow pragmas", false)
    .option("-t, --test", "create a test file", false)
    .action((...args) => {
      const [options, functions] = args.reverse();

      functions.forEach(component => {
        const kebab = kebabName(component);

        make(component, reduxActionsFile, `${kebab}-actions.js`);
        make(component, reduxReducerFile, `${kebab}-reducer.js`);
        make(component, reduxIndexFile, `index.js`);

        // optional files
        if (options.test) {
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
