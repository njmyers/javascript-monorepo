import fill from './fill';
const add = (val) => val + 1;
export default (...args) => fill(add)()(...args.reverse());
