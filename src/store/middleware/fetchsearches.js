import Axios from "axios";
import { saveALlSearches } from "../actions";
const baseUrl = "http://localhost:3000";

export const fetchSearches = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === "FETCH_SEARCHES") {
    async function fetchMyApi() {
      try {
        //Before I tried to fetch only the searches by the specific user (?user=${action.payload}), but then my redux id ended up not matching my db id. Multiple ways to fix this, 
        //but I felt like simply loading everything into redux was the simplest... Could also have used a nested array of JSON objects in each db entry for each user. Might have
        //been better.
        await Axios.get(`${baseUrl}/searches`).then(
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
