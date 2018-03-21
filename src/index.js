import IFrameAPI from './IFrameAPI';
import CreatePlayer from './CreatePlayer';
import __ from 'smalldash';

// specifies default null component if none is provided
const createYouTube = (Component = (props) => null) =>
    __.compose(CreatePlayer, IFrameAPI)(Component);

export default createYouTube;
