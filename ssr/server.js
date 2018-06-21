import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Page from './Page';
import template from './template';

const port = 5000;
const server = express();

// Add our react build folder as a static path for express. Use path since this project is in a sub-folder.
server.use('/build', express.static(path.join(__dirname, 'build')));

// Simple demo so no need for complex rendering. Simply render the the react page as a string and send it in the express response.
server.get('/', (req, res) => {
  res.send(
    template({
      title: 'Server Side Rendering Demo',
      body: renderToString(<Page />),
    })
  );
});

server.listen(port, () => {
  console.log(`SSR (Server Side Rendering) demo running on port ${port}`);
});
