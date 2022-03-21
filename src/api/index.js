import axios from "axios";
import ApiClient from "./ApiClient";

const footballClient = axios.create({
  baseURL: `${process.env.VUE_APP_FOOTBALL_API_BASE_URL}`,
  headers: {
    /**
     * FOOTBALL API AUTH TOKEN KEY
     */
    [process.env.VUE_APP_FOOTBALL_API_AUTH_KEY]:
      process.env.VUE_APP_FOOTBALL_API_AUTH_TOKEN,
  },
});

export const footballApi = new ApiClient(footballClient);
