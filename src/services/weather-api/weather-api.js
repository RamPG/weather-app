import TimeLibrary from '../time-library';

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
  weatherImg = {
    Thunderstorm: 'http://openweathermap.org/img/wn/11d@2x.png',
    Drizzle: 'http://openweathermap.org/img/wn/09d@2x.png',
    Rain: 'http://openweathermap.org/img/wn/10d@2x.png',
    Snow: 'http://openweathermap.org/img/wn/13d@2x.png',
    Mist: 'http://openweathermap.org/img/wn/50d@2x.png',
    Smoke: 'http://openweathermap.org/img/wn/50d@2x.png',
    Haze: 'http://openweathermap.org/img/wn/50d@2x.png',
    Fog: 'http://openweathermap.org/img/wn/50d@2x.png',
    Sand: 'http://openweathermap.org/img/wn/50d@2x.png',
    Dust: 'http://openweathermap.org/img/wn/50d@2x.png',
    Ash: 'http://openweathermap.org/img/wn/50d@2x.png',
    Squall: 'http://openweathermap.org/img/wn/50d@2x.png',
    Tornado: 'http://openweathermap.org/img/wn/50d@2x.png',
    Clear: 'http://openweathermap.org/img/wn/01d@2x.png',
    Clouds: 'http://openweathermap.org/img/wn/02d@2x.png',
  }
  getApiKey() {
      return this._apiKey;
    }
    getCityData(id) {
     return this.cityData[id]
    }

   _transformKelvinToCelsius(temperature) {
    return Math.floor(temperature - 273.15);
  }
  _transformTodayData({ current }) {
     return {
       imgLink: this.weatherImg[current.weather[0].main],
       temp: this._transformKelvinToCelsius(current.temp),
       feelsLike: this._transformKelvinToCelsius(current.feels_like),
       humidity: current.humidity,
       weather: current.weather[0].main,
       windSpeed: current.wind_speed
     }
  }
  _transformSevenDaysData({ daily }) {
     return daily.map((element, index) => {
       return {
         id: index,
         imgLink: this.weatherImg[element.weather[0].main],
         weekDayName: TimeLibrary.getNameDay(TimeLibrary.addWeekDay(index)),
         monthDay: TimeLibrary.addMonthDay(index),
         monthDayName: TimeLibrary.getNameMonth(TimeLibrary.addMonth(index)),
          temp: {
            day: this._transformKelvinToCelsius(element.temp.day),
            night: this._transformKelvinToCelsius(element.temp.night),
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
     const { latitude, altitude } = this.getCityData(cityId);
     const cityWeatherToday = await this.getResource({ latitude, altitude, interval: 'hourly,daily' });
     return this._transformTodayData(cityWeatherToday);

  }

  async getWeatherDataSevenDays(cityId) {
     const { latitude, altitude } = this.getCityData(cityId);
     const cityWeatherSevenDays = await this.getResource({ latitude, altitude, interval: 'current,hourly'});
    return this._transformSevenDaysData(cityWeatherSevenDays);

  }
}
