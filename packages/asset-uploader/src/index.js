import program from 'commander';
import * as fs from 'fs';
import { findImageTag } from './img-tag';
// import appRoot from 'app-root-path';
import directory from '@njmyers/directory';
// register app root path
global.APP_ROOT = process.cwd(); //require('app-root-path').path;

program.version('0.0.1');

function readFile(file) {
  return {
    ...file,
    contents: fs.readFileSync(file.path).toString(),
  };
}

function filterHTML(file) {
  return file.mime.contentType === 'text/html';
}

function log(file) {
  console.log({ path: file.path });
  return file;
}

function writeFile(file) {
  fs.writeFileSync(file.path, file.replacedContents, 'utf8');
}

program
  .command('upload [folder]')
  .description('replace all assets with downloaded ones')
  .action((env, options) => {
    const files = directory(env, {
      recursive: true,
      absolute: true,
      mime: true,
    });

    files
      .filter(filterHTML)
      .map(readFile)
      .forEach((obj) => {
        findImageTag(obj.contents).then((newString) => {
          fs.writeFileSync(obj.path, newString, 'utf8');
        });
      });
  });

program.parse(process.argv);
//
// program
//   .command('deploy [folder]')
//   .description('deploy the specified folder to an AWS S3 bucket')
//   // load global option
//   .option('-B, --bucket <bucket>', 'specify aws bucket inline')
//   .option(
//     '-S, --secret-access-key <secret>',
//     'specify amazon secret access key inline'
//   )
//   .option('-I, --access-key-id <id>', 'specify amazon access id inline')
//   .option('-R --region <region>', 'the AWS region')
//   .option('-D --debug', 'debugs the utility with verbose output')
//   // individual
//   .option('-F, --force', 'ignore all warnings')
//   .option('-s, --silent', 'silent mode suppress feedback')
//   .option('-m, --mime', 'add mime types to all files')
//   .option('--app-root [root]', 'root path of your application')
//   .option('--cache [value]', 'add cache control headers to all files')
//   .option('--build-folder [folder]', 'specify build folder')
//   .option('--keep-deploys [number]', 'how many deploys to keep')
//   .option(
//     '-C --cache-ignore <file,anotherFile>',
//     'files to ignore adding cache control headers',
//     (val) => val.split(',')
//   )
//   .action((env, options) => {
//     const deployOptions = getDeployOptions(env, options);
//     const globalOptions = getGlobalOptions(env, options);
//
//     console.log({ ...deployOptions, ...globalOptions });
//     console.log(globalOptions.appRoot.path);
//
//     deploy({ ...deployOptions, ...globalOptions });
//   });
//
// program
//   .command('revert [release]')
//   .description('revert to a previous release by git sha or release id')
//   // global options
//   .option('-B, --bucket <bucket>', 'specify aws bucket inline')
//   .option(
//     '-S, --secret-access-key <secret>',
//     'specify amazon secret access key inline'
//   )
//   .option('-I, --access-key-id <id>', 'specify amazon access id inline')
//   .option('-D --debug', 'debugs the utility with verbose output')
//   // individual
//   .option('-g, --git <sha>', 'sha of the git commit you wish to revert to')
//   .option(
//     '-id, --release-id <id>',
//     'id of the the release you wish to revert to'
//   )
//   .action((env, options) => {
//     console.log(env);
//   });