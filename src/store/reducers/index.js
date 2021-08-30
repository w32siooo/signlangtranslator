import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";
import markSearchDeletedReducer from "./markSearchDeletedReducer";
import saveAllImagesReducer from "./saveImagesReducer";
const allReducers = combineReducers({
  saveImages: saveAllImagesReducer,
  getImages: imagesReducer,
  hideSearch: markSearchDeletedReducer
});

export default allReducers;
