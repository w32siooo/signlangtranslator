const initState = 0;

const markSearchDeletedReducer = (state = initState, action) => {
  switch (action.type) {
    case "HIDE_SEARCH":
      return state = state+1;
    default:
      return state;
  }
};

export default markSearchDeletedReducer;
