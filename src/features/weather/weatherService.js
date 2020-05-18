import { WeatherAPI } from './WeatherAPI';

const { REACT_APP_WEATHER_API_URL: url, REACT_APP_WEATHER_API_KEY: key } = process.env;

const weatherAPI = new WeatherAPI(url, key);

export const getDailyForecast = ({ city, date, time }) => weatherAPI.getDailyForecast(city, date, time);
