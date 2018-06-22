import React from 'react';
import IFrameAPI from './IFrameAPI';
import CreatePlayer from './CreatePlayer';
import * as __ from 'smalldash';

const DefaultComponent = (props) => {
    return null;
};

// specifies default null component if none is provided
const createYouTube = (Component = DefaultComponent) =>
    __.compose(IFrameAPI, CreatePlayer)(Component);

export default createYouTube;
