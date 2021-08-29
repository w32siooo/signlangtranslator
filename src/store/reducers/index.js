import { combineReducers } from "redux";
import imagesReducer from "./imagesReducer";
import saveAllImagesReducer from "./saveImagesReducer";
const allReducers = combineReducers({
  saveImages: saveAllImagesReducer,

  getImages: imagesReducer,
});

export default allReducers;
