const initState = [
  { value: "data.url", user: "data.key", deleted: true, id: 1 },
];

const saveAllSearchesReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_ALL_SEARCHES":
      return action.payload;
    default:
      return state;
  }
};

export default saveAllSearchesReducer;
