import axios from "axios";

const URL = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/'
  });

  export default URL