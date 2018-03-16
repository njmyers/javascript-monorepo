import pipe from './pipe';
const compose = (...fns) => pipe(...fns.reverse());
export default compose;
