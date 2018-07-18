// @flow
import express from 'express';
import type { Router, $Request, $Response } from 'express';

const router: Router = express.Router();

router.all('/*', (req: $Request, res: $Response) => {
  res.status(404).json({
    status: 404,
    error: 'not a valid endpoint',
  });
});

export default router;
