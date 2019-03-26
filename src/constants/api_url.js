const location = "Santiago,cl";
const api_key = "1937a9b104db78459d28d4b6c0384304";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;