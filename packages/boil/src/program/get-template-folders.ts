import path from 'path';
import shell from 'shelljs';

/**
 * Get a list of the folders that are contained in the template directory. This
 * will populate the list of sub-commands and allows us to grow the cli based on
 * our template folder structure.
 */
function getTemplateFolders(config) {
  const { templateDirectory } = config;

  return shell
    .ls(templateDirectory)
    .map(templateFolder => path.resolve(templateDirectory, templateFolder));
}

export default getTemplateFolders;
