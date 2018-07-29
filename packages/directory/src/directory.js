// @flow
import * as fs from 'fs';
import * as path from 'path';
import { pipe } from 'smalldash';
import * as mime from 'mime-types';
// types
import type { Mime, FileObject, Options } from './types';

/** is it a file or a dir? */
const isFile = (file) => fs.statSync(file).isFile();

/**
 * Reads a directory and returns an array of their paths.
 * If you put in relative paths you will recieve relative paths.
 * If you input absolute paths you will receive absolute paths.
 * @param {string} dir        the path to read
 * @param {Options} options   the options object
 * @return {array}            the files inside the folder
 */
function readDirectory(dir: string, options: Options = {}): Array<string> {
  return isFile(dir)
    ? [dir]
    : []
        .concat(
          ...fs.readdirSync(dir).map((name) => {
            const filePath = `${dir}/${name}`;
            return options.recursive
              ? isFile(filePath)
                ? filePath
                : readDirectory(filePath, options)
              : isFile(filePath)
                ? filePath
                : '';
          })
        )
        .filter((string) => string);
}

/**
 * Helper function returns an absolute path
 * @param  {[type]} relative [description]
 * @return {[type]}          [description]
 */
function pathify(relative: string): string {
  return path.resolve(relative);
}

/**
 * Turns the path into an object with property 'path'
 * @param  {string} path    an absolute path string
 * @return {FileObject}     a file object
 */
function objectify(path: string): FileObject {
  return { path };
}

/**
 * Adds mime information to the file information
 * @param  {FileObject} obj a file object with the required path property
 * @return {FileObject}     a file object with mime types added in
 */
function mimeify(obj: FileObject): FileObject {
  return {
    ...obj,
    mime: {
      contentType: mime.lookup(obj.path),
      extension: path.extname(obj.path).slice(1),
    },
  };
}

/**
 * Reads the file and adds it to the object
 * @param  {FileObject} obj a file object with the required path property
 * @return {FileObject}     a file object with the file contents added in
 */
function read(obj: FileObject): FileObject {
  return {
    ...obj,
    file: fs.readFileSync(obj.path, 'utf8').toString(),
  };
}

/** default options */
const O = {
  absolute: true,
  recursive: false,
  mime: false,
  read: false,
};

/**
 * Looks up files with options including a return of relative or absolute paths
 * Recursively look up the directory
 * Add mime contentType and extension
 * @param  {string} dir       the relative or absolute path to read
 * @param  {Options} options  the options object
 * @return {array}            an array of file objects containing your information
 */
function directory(dir: string, options: Options = O): Array<FileObject> {
  const list = readDirectory(dir, options);

  const pipeline = []
    .concat(options.absolute || options.read ? pathify : [])
    .concat(options.mime || options.read ? objectify : [])
    .concat(options.mime ? mimeify : [])
    .concat(options.read ? read : []);

  return pipeline.length > 0 ? list.map(pipe(...pipeline)) : list;
}

export default directory;

export { readDirectory, objectify, pathify, mimeify, read };
