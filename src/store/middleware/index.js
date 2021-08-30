import { applyMiddleware } from "redux";
import { saveSearchInDb } from "./saveSearch";
import { fetchImages } from "./fetchImages";
import markSearchDeleted from "./mark-search-del";
import { fetchSearches } from "./fetchsearches";

export default applyMiddleware(
  fetchImages,
  saveSearchInDb,
  markSearchDeleted,
  fetchSearches
);
