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
    .option("-f, --flow", "add flow pragmas", false)
    .option("-s, --story", "create a story file", false)
    .option("-d, --sass", "create a sass file", false)
    .option("-t, --test", "create a test file", false)
    .action((...args) => {
      const [options, components] = args.reverse();

      components.forEach(component => {
        const kebab = kebabName(component);
        const title = componentName(component);

        make(component, reactFile, `${title}/${title}.js`);
        make(component, reactIndexFile, `${title}/index.js`);

        // optional files
        if (options.test) {
          make(component, reactTestFile, `${title}/__tests__/${kebab}.test.js`);
        }

        if (options.sass) {
          make(component, reactSassFile, `${title}/${kebab}.sass`);
        }

        if (options.flow) {
          make(component, reactTypesFile, `${title}/types.js`);
        }

        if (options.story) {
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
