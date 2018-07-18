import axios from 'axios';
import Promise from 'bluebird';
import { mergeMap } from 'rxjs/operators';

const getOriginalImage = mergeMap(({ info, ...ctx }) => {
  return new Promise((res, rej) => {
    axios
      .get(info.query.uri, {
        responseType: 'stream',
      })
      .then((response) => {
        res({
          ...ctx,
          info,
          image: response,
        });
      });
  });
});

export default getOriginalImage;
