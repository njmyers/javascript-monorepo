// @flow
import image from './image';
import fallback from './fallback';

import type { Router } from 'express';

/**
 * All of the routes in order as an array. !IMPORTANT in order...
 * Express will map through these and apply them with app.use()
 * @type {array}
 */
const routes: Array<Router> = [image, fallback];

export default routes;
