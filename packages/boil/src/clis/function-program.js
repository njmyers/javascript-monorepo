import { kebabName } from "../args";
import make from "../make";
// templates
import {
  functionFile,
  functionIndexFile,
  functionTestFile
} from "../templates";

const functionProgram = program => {
  program
    .command("function [function-names...]")
    .option("-f, --file", "add boilerplate file index exports", false)
    .option("-t, --test", "create a test file", false)
    .option("-a, --all", "create all possible files", false)
    .action((...args) => {
      const [options, functions] = args.reverse();

      functions.forEach(component => {
        const kebab = kebabName(component);

        if (options.file || options.all) {
          make(component, functionFile, `${kebab}.js`);
          make(component, functionIndexFile, `index.js`);
        }

        // optional files
        if (options.test || options.all) {
          make(component, functionTestFile, `__tests__/${kebab}.test.js`);
        }
      });
    });
};

export default functionProgram;
