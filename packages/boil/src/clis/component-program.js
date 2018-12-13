import { componentName, kebabName } from "../args";
import make from "../make";
// templates
import {
  reactFile,
  reactTypesFile,
  reactTestFile,
  reactStoryFile,
  reactIndexFile,
  reactSassFile
} from "../templates";

const componentProgram = program => {
  program
    .command("component [component-names...]")
    .option("-f, --file", "create a boilerplate file and index export", false)
    .option("-s, --story", "create a story file", false)
    .option("-d, --design", "create a design file, defaults to sass", false)
    .option("-t, --test", "create a test file", false)
    .option("-w, --flow", "create a flow types file and use pragmas", false)
    .option("-a, --all", "create all possible files", false)
    .action((...args) => {
      const [options, components] = args.reverse();

      components.forEach(component => {
        const kebab = kebabName(component);
        const title = componentName(component);

        if (options.file || options.all) {
          make(component, reactFile, `${title}/${title}.js`);
          make(component, reactIndexFile, `${title}/index.js`);
        }

        // optional files
        if (options.test || options.all) {
          make(component, reactTestFile, `${title}/__tests__/${kebab}.test.js`);
        }

        if (options.design || options.all) {
          make(component, reactSassFile, `${title}/${kebab}.sass`);
        }

        if (options.flow || options.all) {
          make(component, reactTypesFile, `${title}/types.js`);
        }

        if (options.story || options.all) {
          make(
            component,
            reactStoryFile,
            `${title}/__stories__/${component}.stories.js`
          );
        }
      });
    });
};

export default componentProgram;
