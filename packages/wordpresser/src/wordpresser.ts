// @ts-nocheck
import parse from 'parse-link-header';
import _request from './request';
import ensureArray from './ensure-array';
import getBaseURL from './get-base-url';

/**
 * Call on our dictionary objects
 * @param  {object}  dictionary null object with simple keys
 * @param  {[postType]}  key        [description]
 * @return {Boolean}            [description]
 */
function hasOwnProperty(dictionary, key) {
  return Object.prototype.hasOwnProperty.call(dictionary, key);
}

const addTypeToObject = (obj) =>
  function addToType(data, postType) {
    ensureArray(data).forEach((post) => {
      if (!hasOwnProperty(obj[postType], post.id)) {
        obj[postType][post.id] = post;
      }
    });
  };

const defaultOptions = {
  method: 'get',
  responseType: 'json',
  validateStatus: (status) => status >= 200 && status < 300,
};

/**
 * Constructor for new wordpress isomorphic fetching style function
 * @param {options}  options to pass in
 * @constructor
 */
function Wordpresser(options) {
  const state = Object.create(null);

  this.request = _request({
    ...defaultOptions,
    ...options,
    baseURL: getBaseURL(options),
  });

  // bind methods to private state object
  this.addToType = addTypeToObject(state);

  /**
   * Correctly initializes a postType by checking for it's existence
   * We also correctly stub the link header functions
   * @param  {string} postType the name of the posts to fetch
   * @return {null}           no return only performs side effects
   */
  this.checkType = function(postType) {
    // create the data postType if it doesn't exist
    if (!hasOwnProperty(state, postType)) {
      state[postType] = Object.create(null);
      state[postType].next = null;
      state[postType].prev = null;
    }
  };

  this.addMethodsToType = function addMethodsToType(links, postType) {
    if (links.next) {
      state[postType].next = this.getPost.bind(this, links.next.url, postType);
    } else {
      state[postType].next = null;
    }

    if (links.prev) {
      state[postType].prev = this.getPost.bind(this, links.prev.url, postType);
    } else {
      state[postType].prev = null;
    }
  };

  this.getPost = function(url, postType) {
    return new Promise((res, rej) => {
      // url can either be a postType or can be a full url
      // axio is smart enough to handle both cases
      this.request(url).then((response) => {
        const { headers, data } = response;
        // create the data postType if it doesn't exist
        this.checkType(postType);
        // add the data
        this.addToType(data, postType);
        // parse the headers for next/prev request functions
        const links = parse(headers.link);

        if (Object.keys(links).length > 0) {
          this.addMethodsToType(links, postType);
        }

        res(response);
      });
    }).catch((error) => {
      rej(error);
    });
  };

  /**
   * Gets the next array of response for all post postTypes
   * @param {object} options   for the request usually just recursive or not
   * @return {Promise} a promise resolving to the http response
   */
  this.getNext = function(requestOptions = {}) {
    return new Promise((res, rej) => {
      const promises = Object.values(state)
        // filter out postTypes with no next function
        .filter(({ next }) => next && typeof next === 'function')
        // map to promises
        .map((postType) => postType.next());

      if (promises.length > 0) {
        Promise.all(promises)
          .then((responses) => {
            if (requestOptions.recursive) {
              this.getNext(requestOptions)
                .then((nextResponses) => {
                  res([...responses, ...nextResponses]);
                })
                .catch((error) => rej(error));
            } else {
              res(ensureArray(responses));
            }
          })
          .catch((error) => rej(error));
      } else {
        res(ensureArray(null));
      }
    });
  };

  this.getPostTypes = function(postType, requestOptions = {}) {
    const postTypes = ensureArray(postType);

    return new Promise((res, rej) => {
      Promise.all(postTypes.map(this.request))
        .then((responses) => {
          responses.forEach((response, i) => {
            const postType = postTypes[i];
            const { headers, data } = response;
            // create the data postType if it doesn't exist
            this.checkType(postType);
            // add the data
            this.addToType(data, postType);
            // parse the headers for next/prev request functions
            const links = parse(headers.link);

            if (Object.keys(links).length > 0) {
              this.addMethodsToType(links, postType);
            }
          });
          if (requestOptions.recursive) {
            this.getNext(requestOptions)
              .then((nextResponses) => {
                // combine responses and filter out null next responses
                const allResponses = [
                  ...responses,
                  ...nextResponses.filter((response) => response),
                ];

                res(allResponses);
              })
              .catch((error) => rej(error));
          } else {
            res(responses);
          }
        })
        .catch((error) => rej(error));
    });
  };

  /**
   * Returns the state with all next/prev functions
   * @return {object} the state of the requests
   */
  this.getState = function() {
    return state;
  };

  /**
   * Removes all of the functions and only returns data
   * @return {object} the clean state of the requests with only data
   */
  this.getData = function() {
    const clean = Object.create(null);
    // stub funtions to this new state object
    const addTypeToClean = addTypeToObject(clean);

    Object.keys(state).forEach((postType) => {
      // remove functions and metadata?
      const { next, prev, last, ...data } = state[postType];
      // create clean postType dictionary
      clean[postType] = Object.create(null);
      // copy data to new clean object
      addTypeToClean(Object.values(data), postType);
    });

    return clean;
  };

  /**
   * Gets the clean json of the data held in state
   * @param  {function}   a json replacer function
   * @param  {number}     json space characters
   * @return {json}       clean json
   */
  this.getJSON = function(replace = null, space = 2) {
    return JSON.stringify(this.getData(), replace, space);
  };
}

export default Wordpresser;
