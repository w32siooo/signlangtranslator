import Axios from "axios";
import { saveALlSearches } from "../actions";
const baseUrl = "http://localhost:3000";

export const fetchSearches = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === "FETCH_SEARCHES") {
    async function fetchMyApi() {
      try {
        await Axios.get(`${baseUrl}/searches?user=${action.payload}`).then(
          (Response) => {
            const searches = Response.data.map((data) => {
              return { value: data.value, id: data.id, deleted: data.deleted };
            });
            dispatch(saveALlSearches(searches));
          }
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchMyApi();
  }
};
