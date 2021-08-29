const imagesReducer = (state = false, action) => {
  switch (action.type) {
    case "GET_ALL_IMAGES":
      return (state = true);
    default:
      return state;
  }
};

export default imagesReducer;
