const ACTION_GET_ALL_IMAGES = "GET_ALL_IMAGES";
const ACTION_SAVE_ALL_IMAGES = "SAVE_ALL_IMAGES";
const ACTION_SAVE_SEARCH = "SAVE_SEARCH";

//Get's all images through a middleware which dispatches save all images.
export const getAllImages = () => {
  return {
    type: ACTION_GET_ALL_IMAGES,
  };
};

//Save all images fetched from middleware in reducer.
export const saveAllImages = (payload) => {
  return {
    type: ACTION_SAVE_ALL_IMAGES,
    payload: payload,
  };
};

export const saveSearch = (search) => {
  return {
    type: ACTION_SAVE_SEARCH,
    payload: search,
  };
};
