// @flow
import type { $Request, $Response, NextFunction } from 'express';

function secure(req: $Request, res: $Response, next: NextFunction) {
  const isSecure = req.protocol;

  if (isSecure) next();
  else
    res.status(401).json({
      status: 401,
      error: 'only secure origins are allowed',
    });
}

export default secure;
