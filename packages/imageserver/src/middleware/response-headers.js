// @flow
import type { $Request, $Response, NextFunction } from 'express';

function responseHeaders(req: $Request, res: $Response, next: NextFunction) {
  res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  });

  next();
}

export default responseHeaders;
