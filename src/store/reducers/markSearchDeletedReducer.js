const initState = { url: "data.url", key: "data.key" };

const markSearchDeletedReducer = (state = initState, action) => {
  switch (action.type) {
    case "HIDE_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export default markSearchDeletedReducer;
