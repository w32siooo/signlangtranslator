import { applyMiddleware } from "redux";
import { saveSearchInDb } from "./saveSearch";
import { fetchImages } from "./fetchImages";

export default applyMiddleware(fetchImages, saveSearchInDb);
