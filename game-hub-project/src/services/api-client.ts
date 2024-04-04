import axios from "axios";
const apiKey = process.env.REACT_APP_GAME_API_KEY;
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
