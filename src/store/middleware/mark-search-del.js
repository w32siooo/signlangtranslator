import axios from "axios";
const baseUrl = "http://localhost:3000";

export const markSearchDeleted = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === "HIDE_SEARCH") {
    const deleteSearch = async (idToDelete) => {
        try {
            console.log(action.payload)
          await axios.patch(`${baseUrl}/searches/${action.payload}`, { deleted: true });
        } catch (error) {}
      };
    
      deleteSearch();
  }
};

export default markSearchDeleted;
