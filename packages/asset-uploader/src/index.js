import program from 'commander';
import chalk from 'chalk';
import * as fs from 'fs';
import * as child from 'child_process';
import ProgressBar from 'progress';
import imageServer from '@njmyers/image-server';
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

function startServer(options) {
  return new Promise((res, rej) => {
    imageServer(options);
    setTimeout(() => res(), 1000);
  });
}

program
  .command('upload [folder]')
  .description('replace all assets with downloaded ones')
  .option('-p, --port <port>', 'Specify port to run on [number]', 6060)
  .option('-d, --debug', 'Debug with verbose output')
  .option('-b, --bucket <bucket>', 'Specify an S3 bucket')
  .option('-c, --cloud-front <url>', 'Specify a cloud front distribution')
  .action((env, options) => {
    // startup node server first
    startServer({ port: options.port, debug: options.debug }).then(() => {
      const HTMLFiles = directory(env, {
        recursive: true,
        absolute: true,
        mime: true,
      }).filter(filterHTML);

      const scanning = new ProgressBar('scanning files [:bar] :percent :etas', {
        total: HTMLFiles.length,
      });

      const upload = new ProgressBar('uploading assets [:bar] :percent :etas', {
        total: HTMLFiles.length,
      });

      HTMLFiles.map(readFile).forEach((obj) => {
        scanning.tick();

        findImageTag(obj.contents, { port: options.port })
          .then((newString) => {
            fs.writeFileSync(obj.path, newString, 'utf8');
            upload.tick();
          })
          .catch((env) => {
            console.log(
              chalk.red(`failed upload for ${env} on port ${options.port}`)
            );
          });
      });
    });
  });

program
  .command('develop')
  .description('start development image server')
  .option('-p, --port <port>', 'Specify port to run on [number]', 6060)
  .option('-d, --debug', 'Debug with verbose output', false)
  .action((options) => {
    // start the server
    imageServer({ port: options.port, debug: options.debug });
    // say some nice instructions
    console.log(
      chalk.yellow(`
      Image Asset Development Server
      Resize and manipulate images live using HTTP requests
      Add Image Sources as Local URLs
      Use query strings to specify options
      <img src="http://localhost:${options.port}?uri=imageURL&resize=400" />
`)
    );
  });

program.parse(process.argv);
