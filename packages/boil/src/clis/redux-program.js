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
    .option("-T, --typescript", "create ts extension and types file", false)
    .option("-a, --all", "create all possible files", false)
    .action((...args) => {
      const [options, functions] = args.reverse();
      const ext = options.typescript || options.all ? "ts" : "js";

      functions.forEach(component => {
        const kebab = kebabName(component);

        if (options.file || options.all) {
          make(component, reduxActionsFile, `${kebab}-actions.${ext}`);
          make(component, reduxReducerFile, `${kebab}-reducer.${ext}`);
          make(component, reduxIndexFile, `index.${ext}`);
        }

        // optional files
        if (options.test || options.all) {
          make(
            component,
            reduxActionsTestFile,
            `__tests__/${kebab}-actions.test.${ext}`
          );
          make(
            component,
            reduxReducerTestFile,
            `__tests__/${kebab}-reducer.test.${ext}`
          );
        }
      });
    });
};

export default reduxProgram;
