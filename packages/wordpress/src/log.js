const log = (action) => (state) => (dispatch) => {
  console.log(action, state);
};

export default log;
