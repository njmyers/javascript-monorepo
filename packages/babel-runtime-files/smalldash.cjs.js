'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _toConsumableArray = _interopDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _regeneratorRuntime = _interopDefault(
  require('@babel/runtime/regenerator')
);
var _asyncToGenerator = _interopDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);
var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));

var fillFrom = function(increment) {
  return function() {
    var arr =
      0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : [];
    return function() {
      var start =
          0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : 0,
        end = 1 < arguments.length ? arguments[1] : void 0;
      return start <= end
        ? fillFrom(increment)(_toConsumableArray(arr).concat([start]))(
            start + increment,
            end
          )
        : arr;
    };
  };
};
var fillFrom$1 = fillFrom(1)();

var fillWith = function() {
  var arr = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : [];
  return function(num) {
    var val =
      1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 0;
    return num
      ? fillWith(_toConsumableArray(arr).concat([val]))(num - 1, val)
      : arr;
  };
};
var fillWith$1 = fillWith();

var objectToArray = function(obj) {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
};

/**
 * @param {array} arr input array containing the values you wish sort by uniqueness
 * @param {function} fn optional comparator function for traversing arrays of objects
 */ var uniq = function(arr) {
  var fn =
      1 < arguments.length && arguments[1] !== void 0
        ? arguments[1]
        : function(obj) {
            return obj;
          },
    hash = {};
  return arr.filter(function(obj) {
    return !hash[fn(obj)] && ((hash[fn(obj)] = !0), !0);
  });
};

/**
 * Make sure to use async as function and not arrow function to prevent babel/rollup issues
 * https://github.com/rollup/rollup/issues/1518
 */ var pipeAsync = function(fn) {
  for (
    var _len = arguments.length, fns = Array(1 < _len ? _len - 1 : 0), _key = 1;
    _key < _len;
    _key++
  )
    fns[_key - 1] = arguments[_key];
  return /*#__PURE__*/ (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
        var _args = arguments;
        return _regeneratorRuntime.wrap(
          function(_context) {
            for (;;)
              switch ((_context.prev = _context.next)) {
                case 0:
                  if (fns.length) {
                    _context.next = 6;
                    break;
                  }
                  return (_context.next = 3), fn.apply(void 0, _args);
                case 3:
                  (_context.t0 = _context.sent), (_context.next = 11);
                  break;
                case 6:
                  return (
                    (_context.t1 = pipeAsync.apply(void 0, fns)),
                    (_context.next = 9),
                    fn.apply(void 0, _args)
                  );
                case 9:
                  (_context.t2 = _context.sent),
                    (_context.t0 = (0, _context.t1)(_context.t2));
                case 11:
                  return _context.abrupt('return', _context.t0);
                case 12:
                case 'end':
                  return _context.stop();
              }
          },
          _callee,
          this
        );
      })
    );
    return function() {
      return _ref.apply(this, arguments);
    };
  })();
};

var composeAsync = function() {
  for (
    var _len = arguments.length, fns = Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    fns[_key] = arguments[_key];
  return pipeAsync.apply(void 0, _toConsumableArray(fns.reverse()));
};

/**
 * Debounce function to control the number of function calls
 * @param {function} fn the function to debounce
 * @param {number} wait number of milliseconds to wait
 * @param {boolean} leading whether to call the function on the leading edge
 */ var debounce = function(fn) {
  var timeout,
    wait = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 1e3,
    leading =
      !!(2 < arguments.length && arguments[2] !== void 0) && arguments[2];
  return function() {
    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    )
      args[_key] = arguments[_key]; // establish context
    var context = this,
      call = function() {
        return fn.apply(context, args);
      }; // call
    // clear previous timeout
    // set timeout for next call
    leading && !timeout && call(),
      clearTimeout(timeout),
      (timeout = setTimeout(call, wait));
  };
};

var throttle = function(fn, limit) {
  var lastCall, timestamp;
  return function() {
    for (
      var _this = this, _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    )
      args[_key] = arguments[_key];
    var call = function() {
      return fn.call.apply(fn, [_this].concat(args));
    };
    timestamp
      ? (clearTimeout(lastCall),
        (lastCall = setTimeout(function() {
          Date.now() - timestamp >= limit && (call(), (timestamp = Date.now()));
        }, limit - (Date.now() - timestamp))))
      : (call(), (timestamp = Date.now()));
  };
};

/**
 * compose functions from left to right automatically currying arguments
 * @param {function} fn first function to pop off the stack and apply
 * @param {functions} fns remainder functions waiting to be applied
 * @param {arguments} args the arguments to curry to next function
 */ var pipe = function(fn) {
  for (
    var _len = arguments.length, fns = Array(1 < _len ? _len - 1 : 0), _key = 1;
    _key < _len;
    _key++
  )
    fns[_key - 1] = arguments[_key];
  return function() {
    return fns.length
      ? pipe.apply(void 0, fns)(fn.apply(void 0, arguments))
      : fn.apply(void 0, arguments);
  };
};

/**
 * compose functions from right to left automatically currying arguments
 * @param {functions} fns functions (transformations) to perform
 */ var compose = function() {
  for (
    var _len = arguments.length, fns = Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    fns[_key] = arguments[_key];
  return pipe.apply(void 0, _toConsumableArray(fns.reverse()));
};

/**
 * Creates a functional recursive method to apply a series of transformations to an array using a mutable method
 * @param {string} method array method to create a functional composition method for
 * @param {function} fn the first function to pop off the stack
 * @param {functions} fns the remaining functions waiting to be applied via the array method
 * @param {array} arr the array to pass in to the manipulations
 */ var createArrayMethodMutable = function(method) {
  // this code is only run on building the methods and is internal type checking
  // does not execute when you are actually using the methods
  if ('function' != typeof Array.prototype[method])
    throw new Error('This method cannot be created');
  var manipulate = function(fn) {
    for (
      var _len = arguments.length,
        fns = Array(1 < _len ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    )
      fns[_key - 1] = arguments[_key];
    return function(arr) {
      return fns.length
        ? manipulate.apply(void 0, fns)(arr.slice()[method](fn))
        : arr.slice()[method](fn);
    };
  };
  return manipulate;
};

/**
 * Creates a functional recursive method to apply a series of transformations to an array
 * @param {string} method array method to create a functional composition method for
 * @param {function} fn the first function to pop off the stack
 * @param {functions} fns the remaining functions waiting to be applied via the array method
 * @param {array} arr the array to pass in to the manipulations
 */ var createArrayMethod = function(method) {
  // this code is only run on building the methods and is internal type checking
  // does not execute when you are actually using the methods
  if ('function' != typeof Array.prototype[method])
    throw new Error('This method cannot be created');
  var manipulate = function(fn) {
    for (
      var _len = arguments.length,
        fns = Array(1 < _len ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    )
      fns[_key - 1] = arguments[_key];
    return function(arr) {
      return fns.length
        ? manipulate.apply(void 0, fns)(arr[method](fn))
        : arr[method](fn);
    };
  };
  return manipulate;
};

var filterRight = createArrayMethod('filter');

var filterLeft = function() {
  for (
    var _len = arguments.length, fns = Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    fns[_key] = arguments[_key];
  return filterRight.apply(void 0, _toConsumableArray(fns.reverse()));
};

var mapRight = createArrayMethod('map');

var mapLeft = function() {
  for (
    var _len = arguments.length, fns = Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    fns[_key] = arguments[_key];
  return mapRight.apply(void 0, _toConsumableArray(fns.reverse()));
};

/**
 * This function performs sideEffects while returning the same value. Useful while composing so that your side effects are documented
 * @param {function} fn pass in a function to perform side effects while keeping the compositional flow of functional programming style
 * @param {args} arguments pass through argument
 */ var sideEffects = function(fn) {
  return function(args) {
    return fn(args), args;
  };
};

/**
 * Checks to see if object is an instance of object
 */ var isObject = function(val) {
    return 'object' === _typeof(val) && null !== val;
  },
  comparePrimitives = function(value, compare) {
    return (
      !!(Number.isNaN(value) && Number.isNaN(compare)) || value === compare
    );
  },
  equals = function(actual, expected) {
    // add an initial short path ... improves speed drastically
    if (actual === expected) return !0; // Check if input is object or primitive
    if (isObject(actual)) {
      var keys = Object.keys(actual); // check if key lengths match (for speed)
      return (
        keys.length === Object.keys(expected).length &&
        keys // map to boolean values
          .map(function(key) {
            // safely access object properties
            if (void 0 !== expected[key]) {
              var value = actual[key],
                compare = expected[key];
              return isObject(value)
                ? equals(value, compare)
                : comparePrimitives(value, compare);
            }
            return Object.keys(expected).includes(key);
          }) // reduce to single boolean
          .reduce(function(a, b) {
            return a && b;
          }, !0)
      ); // compare key values
    } // return primitive comparison
    return comparePrimitives(actual, expected);
  };

/**
 * Throws an error if type other then string is used as argument
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */ var acceptStrings = function(input) {
  if ('string' != typeof input)
    throw new Error(
      'The function only accepts input of type: string. You submitted input of type: '.concat(
        _typeof(input)
      )
    );
  return input;
};

/**
 * Ensures that the argument is a string of length one
 * @param  {string} string the string to test
 * @return {string}        the same string provided it meets the requirements
 */ var validateLetterString = function(string) {
  if (1 !== string.length)
    throw new Error('this function only accepts strings of length equal to 1');
  return string;
};

/**
 * Tests whether a letter is uppercase or not
 * @param  {string}  letter the letter to test
 * @return {boolean}        boolean value of whether the letter is upper case
 */ var _isUpperCase = function(letter) {
    return letter !== letter.toLowerCase();
  },
  isUpperCase = compose(
    _isUpperCase,
    validateLetterString
  );

/**
 * Creates a camelCase converter function
 * @param  {string} separator the seperator to insert at a camelcase division
 * @param  {string} str       the string to convert
 * @return {function}         the converter function
 * @return {string}           the converted string
 */ var camelTo = function(separator) {
  return function(str) {
    return str
      .split('')
      .map(function(letter) {
        return isUpperCase(letter) ? separator + letter.toLowerCase() : letter;
      })
      .join('');
  };
};

/**
 * Converts a camelCase string to kebab-case
 * @type {[type]}
 */ var camelToKebab = compose(
  camelTo('-'),
  acceptStrings
);

var camelToPascal = function(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};
var camelToPascal$1 = compose(
  camelToPascal,
  acceptStrings
);

var camelToSentence = compose(
  camelTo(' '),
  acceptStrings
);

var camelToSnake = compose(
  camelTo('_'),
  acceptStrings
);

/**
 * @param {string} str input string
 * @param {string} split split or character to split string at
 */ var capitalize = function(str) {
  var split =
    1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : ' ';
  return str
    .split(split)
    .map(function(word) {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    })
    .join(split);
};

var camelToTitle = compose(
  capitalize,
  camelTo(' '),
  acceptStrings
);

var caseToCase = function(first) {
  return function(second) {
    return function(str) {
      return str.split(first).join(second);
    };
  };
};

var padDigits = function(pad) {
  return function(num) {
    return 10 > num ? ''.concat(pad).concat(num) : num.toString();
  };
};

var padZero = padDigits(0);

var currencyString = function(currencySymbol) {
  return function(number) {
    var base = Math.floor(number),
      decimal = Math.round(100 * (number - base));
    return ''
      .concat(currencySymbol)
      .concat(base.toString(), '.')
      .concat(padZero(decimal));
  };
};

var dollarString = currencyString('$');

/**
 * Tests whether a letter is lowercase or not
 * @param  {string}  letter the letter to test
 * @return {boolean}        boolean value of whether the letter is upper case
 */ var _isLowerCase = function(letter) {
    return letter !== letter.toUpperCase();
  },
  isLowerCase = compose(
    _isLowerCase,
    validateLetterString
  );

var toCamel = function(seperator) {
  return function(str) {
    return str
      .split(seperator)
      .map(function(word, i) {
        return 0 === i
          ? word.toLowerCase()
          : word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  };
};

/**
 * Converts kebab-case to camelCase
 * @type {[type]}
 */ var kebabToCamel = compose(
  toCamel('-'),
  acceptStrings
);

var kebabTo = caseToCase('-');

/**
 * Converts kebab-case to sentence case
 * @type {[type]}
 */ var kebabToSentence = compose(
  kebabTo(' '),
  acceptStrings
);

/**
 * Converts kebab-case to snake_case
 * @type {[type]}
 */ var kebabToSnake = compose(
  kebabTo('_'),
  acceptStrings
);

/**
 * Converts a kebab-case string to Title Case
 * @param {string}
 */ var kebabToTitle = compose(
  capitalize,
  kebabTo(' '),
  acceptStrings
);

var unitString = function(unit) {
  return function(val) {
    return ''.concat(val).concat(unit);
  };
};

var percentString = unitString('%');

var percent = function(x, y) {
  return percentString(Math.round(100 * (x / y)));
};

var pixelString = unitString('px');

var sentenceToCamel = toCamel(' ');

var sentenceTo = caseToCase(' ');

var sentenceToKebab = sentenceTo('-');

var sentenceToSnake = sentenceTo('_');

/**
 * Converts sentence case to Title Case
 * @type {[type]}
 */ var _sentenceToTitle = function(string) {
    return string
      .split(' ')
      .map(function(word) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
      })
      .join(' ');
  },
  sentenceToTitle = compose(
    _sentenceToTitle,
    acceptStrings
  );

var snakeToCamel = toCamel('_');

var snakeTo = caseToCase('_');

var snakeToKebab = snakeTo('-');

var snakeToSentence = snakeTo(' ');

var validateNumber = function(base) {
  return function(unknown) {
    var type = _typeof(unknown);
    return 'number' === type
      ? unknown
      : 'string' === type
        ? parseInt(unknown, base)
        : 0;
  };
};

var validateDecimal = validateNumber(10);

var hours = function(time) {
    return Math.floor(time / 3600);
  },
  minutes = function(time) {
    return Math.floor(time / 60);
  },
  seconds = function(time) {
    return Math.floor(time % 60);
  },
  timeString = function(char) {
    return function(time) {
      validateDecimal(time);
      return hours(time)
        ? ''
            .concat(hours(time))
            .concat(char)
            .concat(padZero(minutes(time)))
            .concat(char)
            .concat(padZero(seconds(time)))
        : ''
            .concat(minutes(time))
            .concat(char)
            .concat(padZero(seconds(time)));
    };
  };
var timeString$1 = timeString(':');

var toPascal = function(seperator) {
  return function(str) {
    return str
      .split(seperator)
      .map(function(word) {
        return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  };
};

var validateHexadecimal = validateNumber(16);

exports.fillFrom = fillFrom$1;
exports.fillWith = fillWith$1;
exports.objectToArray = objectToArray;
exports.uniq = uniq;
exports.composeAsync = composeAsync;
exports.debounce = debounce;
exports.pipeAsync = pipeAsync;
exports.throttle = throttle;
exports.compose = compose;
exports.createArrayMethodMutable = createArrayMethodMutable;
exports.createArrayMethod = createArrayMethod;
exports.filterLeft = filterLeft;
exports.filterRight = filterRight;
exports.filter = filterLeft;
exports.mapLeft = mapLeft;
exports.mapRight = mapRight;
exports.map = mapLeft;
exports.pipe = pipe;
exports.sideEffects = sideEffects;
exports.equals = equals;
exports.acceptStrings = acceptStrings;
exports.camelToKebab = camelToKebab;
exports.camelToPascal = camelToPascal$1;
exports.camelToSentence = camelToSentence;
exports.camelToSnake = camelToSnake;
exports.camelToTitle = camelToTitle;
exports.camelTo = camelTo;
exports.capitalize = capitalize;
exports.caseToCase = caseToCase;
exports.currencyString = currencyString;
exports.dollarString = dollarString;
exports.isLowerCase = isLowerCase;
exports.isUpperCase = isUpperCase;
exports.kebabToCamel = kebabToCamel;
exports.kebabToSentence = kebabToSentence;
exports.kebabToSnake = kebabToSnake;
exports.kebabToTitle = kebabToTitle;
exports.kebabTo = kebabTo;
exports.padDigits = padDigits;
exports.padZero = padZero;
exports.percentString = percentString;
exports.percent = percent;
exports.pixelString = pixelString;
exports.sentenceToCamel = sentenceToCamel;
exports.sentenceToKebab = sentenceToKebab;
exports.sentenceToSnake = sentenceToSnake;
exports.sentenceToTitle = sentenceToTitle;
exports.sentenceTo = sentenceTo;
exports.snakeToCamel = snakeToCamel;
exports.snakeToKebab = snakeToKebab;
exports.snakeToSentence = snakeToSentence;
exports.snakeTo = snakeTo;
exports.timeString = timeString$1;
exports.toCamel = toCamel;
exports.toPascal = toPascal;
exports.unitString = unitString;
exports.validateDecimal = validateDecimal;
exports.validateHexadecimal = validateHexadecimal;
exports.validateLetterString = validateLetterString;
exports.validateNumber = validateNumber;
//# sourceMappingURL=smalldash.cjs.js.map
