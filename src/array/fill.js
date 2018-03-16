const fill = (arr = []) => (num, val = 0) => (!num ? arr : fill([val, ...arr])(num - 1, val));
export default fill;
