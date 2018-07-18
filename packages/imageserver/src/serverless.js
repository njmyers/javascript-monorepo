import serverless from 'serverless-http';
import app from './app';
// export final route like this instead of using export for serverless
module.exports.handler = serverless(app);
