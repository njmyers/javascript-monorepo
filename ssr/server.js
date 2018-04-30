import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Page from './Page';
import template from './template';
import path from 'path';

const port = 3000;
const server = express();

server.use('/build', express.static(path.join(__dirname, 'build')));

server.get('/', (req, res) => {
    res.send(
        template({
            title: 'Test Page',
            body: renderToString(<Page />),
        })
    );
});

server.listen(port, () => {
    console.log(`SSR (Server Side Rendering) demo running on port ${port}`);
});
