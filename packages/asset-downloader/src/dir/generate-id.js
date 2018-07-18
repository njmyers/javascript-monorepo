const generateID = () =>
  Math.random()
    .toString(16)
    .slice(-8);

export default generateID;
