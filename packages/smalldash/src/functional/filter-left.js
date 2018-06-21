import filterRight from './filter-right';

const filterLeft = (...fns) => filterRight(...fns.reverse());

export default filterLeft;
