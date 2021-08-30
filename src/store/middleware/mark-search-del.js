import axios from "axios";
import { fetchAllSearches } from "../actions";
const baseUrl = "http://localhost:3000";

export const markSearchDeleted = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === "HIDE_SEARCH") {
    const deleteSearch = async (idToDelete) => {
      try {
        await axios.patch(`${baseUrl}/searches/${action.payload.id}`, {
          deleted: true,
        });
      } catch (error) {}
    };
    deleteSearch();
  }
};

export default markSearchDeleted;
