const initState = [
  { value: "data.url", user: "data.key", deleted: true, id: 1 },
];

const saveAllSearchesReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_ALL_SEARCHES":
      return action.payload;
    case "HIDE_SEARCH":
      return [
        ...state.slice(0, action.payload.id),
        {
          value: action.payload.value,
          user: action.payload.user,
          deleted: true,
          id: action.payload.id,
        },
        ...state.slice(action.payload.id + 1),
      ];
    default:
      return state;
  }
};

export default saveAllSearchesReducer;
