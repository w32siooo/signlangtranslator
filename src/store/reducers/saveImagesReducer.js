const initState = { url: "data.url", key: "data.key" };

const saveAllImagesReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_ALL_IMAGES":
      return action.payload;
    default:
      return state;
  }
};

export default saveAllImagesReducer;
