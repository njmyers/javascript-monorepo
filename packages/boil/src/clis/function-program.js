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
    .option("-f, --flow", "add flow pragmas", false)
    .option("-t, --test", "create a test file", false)
    .action((...args) => {
      const [options, functions] = args.reverse();

      functions.forEach(component => {
        const kebab = kebabName(component);

        make(component, functionFile, `${kebab}.js`);
        make(component, functionIndexFile, `index.js`);

        // optional files
        if (options.test) {
          make(component, functionTestFile, `__tests__/${kebab}.test.js`);
        }
      });
    });
};

export default functionProgram;
