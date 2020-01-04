import fs from 'fs';
import path from 'path';

import { findDirectoryUpwards } from '../utils';

import getProjectRoot from './get-project-root';
import getCliRoot from './get-cli-root';

const DEFAULT_TEMPLATE_DIRECTORY = path.resolve(getCliRoot(), 'templates');

/**
 * Get the location of the default templates directory. First searches for a
 * templates directory in the project root. If it is not found then falls back
 * to the templates directory in this repository
 */
function getDefaultTemplateDirectory(): string {
  const projectRoot = getProjectRoot();

  if (!projectRoot) {
    return DEFAULT_TEMPLATE_DIRECTORY;
  }

  const templatesDirectory = findDirectoryUpwards(projectRoot, './templates');

  if (fs.existsSync(templatesDirectory)) {
    return templatesDirectory;
  }

  return DEFAULT_TEMPLATE_DIRECTORY;
}

export default getDefaultTemplateDirectory;
