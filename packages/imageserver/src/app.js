// @flow
import express from 'express';
// routes and middleware
import routes from './routes';
import middleware from './middleware';
// initialize app
const app = express();
// apply all middleware
middleware.forEach((middlware) => app.use(middlware));
// apply all top level routes
routes.forEach((router) => app.use('/', router));
// export the app
export default app;
