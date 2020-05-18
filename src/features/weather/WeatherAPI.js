import * as R from 'ramda';

import axios from 'axios';
import querystring from 'querystring';

const getData = R.prop('data');

export class WeatherAPI {
  constructor(url, apiKey) {
    this._apiKey = apiKey;
    this._axios = axios.create({
      baseURL: url,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  get axios() {
    return this._axios;
  }

  getDailyForecast(city) {
    const query = querystring.stringify({ appid: this._apiKey, cnt: 1, city });
    // return this.axios.get(`/forecast/daily?${query}`).then(getData);
    // FIXME: since my API_KEY is not working, I had to mock the http request
    return this.axios.get(`http://www.mocky.io/v2/5ec1dbbf2f00006600c34e0e?${query}`).then(getData);
  }
}
