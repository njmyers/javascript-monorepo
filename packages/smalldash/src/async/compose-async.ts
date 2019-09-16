import pipeAsync from './pipe-async';

const composeAsync = (...fns) => pipeAsync(...fns.reverse());

export default composeAsync;
