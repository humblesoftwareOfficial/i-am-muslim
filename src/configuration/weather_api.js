import axios from "axios";

const API_KEY = "65d9ca042b2a5184505b3c100ee73c23";

let api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const GetCurrentWeather = async (lat = 0, lon = 0) =>
  await api.post(`/weather?lat=${lat}&lon=${lon}&appId=${API_KEY}`);

const apis = {
  GetCurrentWeather,
};

export default apis;
