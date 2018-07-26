import axios from 'axios';
import qs from 'qs';
import { queryString, isLocalURL, localURLs } from './regex';
import { pipe } from 'smalldash';

/** Passing the promise along... */
const uploadAssets = (port) => ({ query, ...env }) => {
  return new Promise((res, rej) => {
    axios
      .request({
        url: `http://localhost:${port}`,
        params: query,
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'brackets' }),
        responseType: 'json',
      })
      .then((response) => {
        res({
          ...env,
          query,
          cloudFrontURL: response.data.cloudFrontURL,
        });
      })
      .catch((error) =>
        rej({
          ...env,
          query,
          error,
        })
      );
  });
};

function addModeToQuery({ decodedURL, ...env }) {
  return {
    ...env,
    decodedURL,
    query: {
      ...qs.parse(queryString(decodedURL)),
      mode: 'production',
    },
  };
}

function objectify(url) {
  return { url };
}

function decodeURL({ url, ...env }) {
  return {
    ...env,
    url,
    decodedURL: decodeURIComponent(url),
  };
}

function encodeURL({ cloudFrontURL, ...env }) {
  return {
    ...env,
    cloudFrontURL,
    encodedCloudFrontURL: encodeURIComponent(cloudFrontURL),
  };
}

const log = (obj) => {
  console.log(obj);
};

export function findImageTag(string, { port }) {
  return new Promise((res, rej) => {
    // construct the env pipeline
    const pipeline = pipe(
      objectify,
      decodeURL,
      addModeToQuery,
      uploadAssets(port)
    );

    const matches = localURLs(string);

    if (Array.isArray(matches)) {
      const promises = localURLs(string).map(pipeline);

      Promise.all(promises)
        .then((resolved) => {
          const newString = resolved
            .map(encodeURL)
            .reduce(
              (prevString, env) =>
                prevString.replace(env.url, env.cloudFrontURL),
              string
            );

          // pass the main promise back
          res(newString);
        })
        .catch((error) => {
          rej(string);
        });
    }
  });
}
