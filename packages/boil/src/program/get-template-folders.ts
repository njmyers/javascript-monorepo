import fs from 'fs';
import path from 'path';

import { Config } from '../config';

/**
 * Get a list of the folders that are contained in the template directory. This
 * will populate the list of sub-commands and allows us to grow the cli based on
 * our template folder structure.
 */
function getTemplateFolders(config: Config): string[] {
  const { templateDirectory } = config;

  return fs
    .readdirSync(templateDirectory)
    .map((filePath: string) => path.resolve(templateDirectory, filePath))
    .filter((filePath: string) => fs.statSync(filePath).isDirectory());
}

export default getTemplateFolders;
