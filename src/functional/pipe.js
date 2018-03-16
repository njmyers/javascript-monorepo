const pipe = (fn, ...fns) => (...args) => (!fns.length ? fn(...args) : pipe(...fns)(fn(...args)));

export default pipe;
