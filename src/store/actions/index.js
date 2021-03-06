const ACTION_GET_ALL_IMAGES = "GET_ALL_IMAGES";
const ACTION_SAVE_ALL_IMAGES = "SAVE_ALL_IMAGES";
const ACTION_SAVE_SEARCH = "SAVE_SEARCH";
const ACTION_MARK_SEARCH_DELETED = "HIDE_SEARCH";
const ACTION_FETCH_ALL_SEARCHES = "FETCH_SEARCHES";
const ACTION_SAVE_ALL_SEARCHES = "SAVE_ALL_SEARCHES";

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

export const markSearchDel = (searchToMark) => {
  return {
    type: ACTION_MARK_SEARCH_DELETED,
    payload: searchToMark,
  };
};

export const fetchAllSearches = (user) => {
  return {
    type: ACTION_FETCH_ALL_SEARCHES,
    payload: user,
  };
};

export const saveALlSearches = (searches) => {
  return {
    type: ACTION_SAVE_ALL_SEARCHES,
    payload: searches,
  };
};
