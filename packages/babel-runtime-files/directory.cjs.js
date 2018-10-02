'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _objectSpread = _interopDefault(
  require('@babel/runtime/helpers/objectSpread')
);
var _toConsumableArray = _interopDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var fs = require('fs');
var path = require('path');
var smalldash = require('./smalldash.cjs.js');
var mime = require('mime-types');

/** is it a file or a dir? */ var isFile = function(file) {
  return fs.statSync(file).isFile();
};
/**
 * Reads a directory and returns an array of their paths.
 * If you put in relative paths you will recieve relative paths.
 * If you input absolute paths you will receive absolute paths.
 * @param {string} dir        the path to read
 * @param {Options} options   the options object
 * @return {array}            the files inside the folder
 */ function readDirectory(dir) {
  var _ref,
    options =
      1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return isFile(dir)
    ? [dir]
    : (_ref = []).concat
        .apply(
          _ref,
          _toConsumableArray(
            fs.readdirSync(dir).map(function(name) {
              var filePath = ''.concat(dir, '/').concat(name);
              return options.recursive
                ? isFile(filePath)
                  ? filePath
                  : readDirectory(filePath, options)
                : isFile(filePath)
                  ? filePath
                  : '';
            })
          )
        )
        .filter(function(string) {
          return string;
        });
}
/**
 * Helper function returns an absolute path
 * @param  {[type]} relative [description]
 * @return {[type]}          [description]
 */ function pathify(relative) {
  return path.resolve(relative);
}
/**
 * Turns the path into an object with property 'path'
 * @param  {string} path    an absolute path string
 * @return {FileObject}     a file object
 */ function objectify(path$$1) {
  return { path: path$$1, include: !0 };
}
/**
 * Adds mime information to the file information
 * @param  {FileObject} obj a file object with the required path property
 * @return {FileObject}     a file object with mime types added in
 */ function mimeify(obj) {
  return _objectSpread({}, obj, {
    mime: {
      contentType: mime.lookup(obj.path),
      extension: path.extname(obj.path).slice(1),
    },
  });
}
/**
 * Reads the file and adds it to the object
 * @param  {FileObject} obj a file object with the required path property
 * @return {FileObject}     a file object with the file contents added in
 */ function read(obj) {
  return _objectSpread({}, obj, {
    file: obj.include ? fs.readFileSync(obj.path, 'utf8').toString() : null,
  });
}
/**
 * Normalize the name of an extension for comparison purposes
 * Remove all leading periods from extension names
 * Then we can safely compare to the output from mime.extension
 * @param {string} ext the file extension
 * @return                the normalized file extension with no leading period
 */ var normalizeExtension = function(ext) {
    return '.' === ext.charAt(0) ? normalizeExtension(ext.slice(1)) : ext;
  },
  filterify = function(types) {
    return function(obj) {
      return _objectSpread({}, obj, {
        include: Array.isArray(types)
          ? types.map(normalizeExtension).includes(obj.mime.extension)
          : obj.mime.extension === normalizeExtension(types),
      });
    };
  },
  defO = { absolute: !0, recursive: !1, mime: !1, read: !1, filter: !1 };
/**
 * Filters the files by file types
 * @param {FileObject} obj a file object with mime types to filter
 * @return {FileObject}    a file object with a flag to indicate it's inclusion in the final array
 */ /**
 * Looks up files with options including a return of relative or absolute paths
 * Recursively look up the directory
 * Add mime contentType and extension
 * @param  {string} dir       the relative or absolute path to read
 * @param  {Options} options  the options object
 * @return {array}            an array of file objects containing your information
 */ function directory(dir) {
  var options =
      1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : defO,
    list = readDirectory(dir, options),
    pipeline = []
      .concat(options.absolute || options.read ? pathify : [])
      .concat(options.mime || options.read || options.filter ? objectify : [])
      .concat(options.mime || options.filter ? mimeify : [])
      .concat(options.filter ? filterify(options.filter) : [])
      .concat(options.read ? read : []);
  return 0 < pipeline.length
    ? list // map through our pipeline
        .map(smalldash.pipe.apply(void 0, _toConsumableArray(pipeline))) // finally apply the filtering for our safe results array
        // if we are in "only paths" mode then we won't have an object
        // if we have an object we default to include unless we add a filter
        .filter(function(obj) {
          return obj.include || 'string' == typeof obj;
        })
    : list;
}

module.exports = directory;
//# sourceMappingURL=directory.cjs.js.map
