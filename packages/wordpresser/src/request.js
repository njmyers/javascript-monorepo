// @flow
import axios from 'axios';

const validateRequest = (params, cb) => {
  const required = ['url', 'method', 'responseType'];

  const notPresent = required.map((key) => params[key]).filter((key) => !key);

  if (notPresent.length > 0) {
    const errors = notPresent.reduce(
      (prevString, key) => `${prevString}\n${key}`,
      `You are missing the following paramters from your request:\n`
    );

    cb(errors);
  }
};

const request = (stubOptions = {}) => (url, options = {}) =>
  new Promise((res, rej) => {
    const params = {
      ...stubOptions,
      ...options,
      url,
    };
    // side effects
    validateRequest(params, rej);
    // make request
    axios(params)
      .then((response) => res(response))
      .catch((error) => rej(error));
  });

export default request;
