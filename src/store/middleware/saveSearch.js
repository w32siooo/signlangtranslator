import axios from "axios";
const baseUrl = "http://localhost:3000";

export const saveSearchInDb = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === "SAVE_SEARCH") {
    const saveSearch2 = async () => {
      console.log(action.payload.user);
      try {
        await axios.post(`${baseUrl}/searches`, {
          value: action.payload.value,
          user: action.payload.user,
          deleted: action.payload.deleted,
        });
      } catch (error) {
        console.error(error);
      }
    };
    saveSearch2();
  }
};

export default saveSearchInDb;
