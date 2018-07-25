import cheerio from 'cheerio';
import axios from 'axios';
import qs from 'qs';

function URLRegex(url, port) {
  const regex = new RegExp(
    `/http:\/\/localhost:${port}\/\?[a-zA-Z0-9\-\._~:\/?#\[\]@!$&'\(\)*+,;=%]*`,
    'gi'
  );
}

const query = /https?:\/\/localhost:3000\/?\??(.*)/gi;

const regex = /https?:\/\/localhost:3000\/\?[a-zA-Z0-9\-\._~:\/?#\[\]@!$&'\(\)*+,;=%]*/gi;

// axios.interceptors.request.use((request) => {
//   console.log('Starting Request', request);
//   return request;
// });
//
// axios.interceptors.response.use((response) => {
//   console.log('Response:', response);
//   return response;
// });

export function _findImageTag(string) {
  const $ = cheerio.load(string);
  const changed = $('img').map((i, element) => {
    const img = $(element);
    // sources
    const src = img.attr('src');
    const srcset = img.attr('srcset');

    // console.log(decodeURIComponent(srcset));

    // if (regex.test(src)) {
    //   // decodeURIComponent(src)
    //   console.log(src.match(regex));
    // }

    if (regex.test(srcset)) {
      const matches = srcset.match(regex);
      const promises = matches
        .map(decodeURIComponent)
        .map((url) => {
          return {
            url,
            query: url.match(query),
          };
        })
        .map((obj) => {
          console.log(obj.query);
          return obj;
        });
      // .map((match) =>
      //   axios.request({
      //     url: match,
      //     params: {
      //       mode: 'production',
      //     },
      //     paramsSerializer: function(params) {
      //       return qs.stringify(params, { arrayFormat: 'brackets' });
      //     },
      //   })
      // );

      // axios.request({});
    }
  });
}

function findImageTag(file) {
  const regex = /\<img.*\/\>/gi;

  return {
    ...file,
  };
}
