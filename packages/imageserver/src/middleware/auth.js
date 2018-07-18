// @flow
import type { $Request, $Response, NextFunction } from 'express';

const requestAPIKey = process.env.REQUEST_API_KEY;

const auth = (req: $Request, res: $Response, next: NextFunction) => {
  const key: string = req.get('Authorization');

  if (key === requestAPIKey) next();
  else
    res.status(401).json({
      status: 401,
      error: 'not authorized',
    });
};

export default auth;
