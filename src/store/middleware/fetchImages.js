import Axios from "axios";
import { saveAllImages } from "../actions";
const baseUrl = "http://localhost:3000";

export const fetchImages = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === "GET_ALL_IMAGES") {
    const getAllSigns = async () => {
      try {
        await Axios.get(`${baseUrl}/posts`).then((Response) => {
          const returnedData = Response.data.map((data) => {
            return { url: data.url, key: data.key };
          });
          dispatch(saveAllImages(returnedData));
        });
      } catch (error) {
        console.error(error);
      }
    };
    getAllSigns();
  }
};
