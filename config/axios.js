import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://developers.themoviedb.org/3",
});

export default axiosFetch;
