type WeatherObjectType = {
    id: number,
    main: string,
    icon: string,
};

export type GetWeatherDataTodayResponseType = {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: {
        dt: number,
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,
        weather: Array<WeatherObjectType>,
    },
};

export type GetWeatherDataSevenDaysResponseType = {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    daily: Array<{
        dt: number,
        sunrise: number,
        sunset: number,
        temp: {
            day: number,
            min: number,
            max: number,
            night: number,
            eve: number,
            morn: number
        },
        feels_like: {
            day: number,
            night: number,
            eve: number,
            morn: number,
        },
        pressure: number,
        humidity: number,
        dew_point: number,
        wind_speed: number,
        wind_deg: number,
        weather: Array<WeatherObjectType>,
        clouds: number,
        pop: number,
        rain: number,
        uvi: number,
    }>,
};

type WeatherImgType = {
    Thunderstorm: string,
    Drizzle: string,
    Rain: string,
    Snow: string,
    Mist: string,
    Smoke: string,
    Haze: string,
    Fog: string,
    Sand: string,
    Dust: string,
    Ash: string,
    Squall: string,
    Tornado: string,
    Clear: string,
    Clouds: string,
};

export type GetGeoCoordsResponseType = {
    place_id: string,
    licence: string,
    osm_type: string,
    osm_id: string,
    boundingbox: Array<string>,
    lat: string,
    lon: string
    display_name: string,
    class: string,
    type: string,
    importance: number,
    icon: string,
};
