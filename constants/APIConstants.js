export const API_KEY = "5eb56b60fbd64f9b919114639241110";
export const BASE_URL = `https://api.weatherapi.com/v1/`;
export const formatUrl = (endPoint) => {
  return `${endPoint}?key=${API_KEY}`;
};
export const formatBaseUrl = (endPoint) => {
  return `${BASE_URL}${endPoint}?key=${API_KEY}`;
};
export const END_POINT = {
  current: "/current.json",
  forecast: "/forecast.json",
  search: "/search.json",
  history: "/history.json",
  alerts: "/alerts.json",
  marine: "/marine.json",
  future: "/future.json",
  sports: "/sports.json",
  astronomy: "/astronomy.json",
  ip: "/ip.json",
};

export const ERROR_400 = "Request failed with status code 400";
export const ERROR_500 = "Request failed with status code 500";
export const NETWORK_ERROR = "Network Error";
