export default class WeatherAPI {
   _apiKey = 'c0e4dd09360b7cc7634d299c1d2e9790';
   cityData = [
    {
      cityName: 'Moscow',
      latitude: '55.751244',
      altitude: '37.618423',
    },
    {
      cityName: 'Kiev',
      latitude: '50.448853',
      altitude: '30.513346',
    },
    {
      cityName: 'Vienna',
      latitude: '48.204418',
      altitude: '16.381353',
    },
  ]
    getApiKey() {
      return this._apiKey;
    }
    getCityDate(id) {
     return this.cityData[id]
    }


   _transformKelvinToCelsius(temperature) {
    return Math.floor(temperature - 273.15);
  }
  _transformTodayData(data) {
     return {
       temp: this._transformKelvinToCelsius(data.current.temp),
       feelsLike: this._transformKelvinToCelsius(data.current.feels_like),
       humidity: data.current.humidity,
       weather: data.current.weather[0].main,
       windSpeed: data.current.wind_speed
     }
  }
  _transformSevenDaysData(data) {
     return data.daily.map((element) => {
       return {
          temp: {
            day: this._transformKelvinToCelsius(element.temp.day),
            night: this._transformKelvinToCelsius(element.temp.night)
          },
         feelsLike: {
           day: this._transformKelvinToCelsius(element.feels_like.day),
           night: this._transformKelvinToCelsius(element.feels_like.night)
         },
         humidity: element.humidity,
         weather: element.weather[0].main,
         windSpeed: element.wind_speed
       }
     })
  }

  async getResource({ latitude, altitude, interval }) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${altitude}&exclude=${interval}&appid=${this.getApiKey()}`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

   async getWeatherDataToday(cityId) {
     const { latitude, altitude } = this.getCityDate([cityId]);
     const cityWeatherToday = await this.getResource({ latitude, altitude, interval: 'hourly,daily' });
     return this._transformTodayData(cityWeatherToday);
  }

  async getWeatherSevenDays(cityId) {
     const { latitude, altitude } = this.getCityDate([cityId]);
     const cityWeatherSevenDays = await this.getResource({ latitude, altitude, interval: 'current,hourly'});
     return this._transformSevenDaysData(cityWeatherSevenDays);
  }
}
