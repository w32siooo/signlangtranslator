import { applyMiddleware } from "redux";
import { fetchImages } from "./fetchImages";

export default applyMiddleware(fetchImages);
