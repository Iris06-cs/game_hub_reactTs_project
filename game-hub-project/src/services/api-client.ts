import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "776c24171b594e5e9ad54d56f454a383",
  },
});
