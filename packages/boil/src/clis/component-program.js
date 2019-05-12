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
    .option("-T, --typescript", "create ts extension and types file", false)
    .option("-a, --all", "create all possible files", false)
    .action((...args) => {
      const [options, components] = args.reverse();
      const ext = options.typescript || options.all ? "ts" : "js";

      components.forEach(component => {
        const kebab = kebabName(component);
        const title = componentName(component);

        if (options.file || options.all) {
          make(component, reactFile, `${title}/${title}.${ext}`);
          make(component, reactIndexFile, `${title}/index.${ext}`);
        }

        // optional files
        if (options.test || options.all) {
          make(
            component,
            reactTestFile,
            `${title}/__tests__/${kebab}.test.${ext}`
          );
        }

        if (options.design || options.all) {
          make(component, reactSassFile, `${title}/${kebab}.sass`);
        }

        if (options.typescript || options.all) {
          make(component, reactTypesFile, `${title}/types.${ext}`);
        }

        if (options.story || options.all) {
          make(
            component,
            reactStoryFile,
            `${title}/__stories__/${component}.stories.${ext}`
          );
        }
      });
    });
};

export default componentProgram;
