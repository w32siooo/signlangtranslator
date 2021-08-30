import { applyMiddleware } from "redux";
import { saveSearchInDb } from "./saveSearch";
import { fetchImages } from "./fetchImages";
import markSearchDeleted from "./mark-search-del";

export default applyMiddleware(fetchImages, saveSearchInDb,markSearchDeleted);
