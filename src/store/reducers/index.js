import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";
import markSearchDeletedReducer from "./markSearchDeletedReducer";
import saveAllSearchesReducer from "./saveAllSearchesReducer";
import saveAllImagesReducer from "./saveImagesReducer";
const allReducers = combineReducers({
  saveImages: saveAllImagesReducer,
  getImages: imagesReducer,
  hideSearch: markSearchDeletedReducer,
  saveAllSearches: saveAllSearchesReducer,
});

export default allReducers;
