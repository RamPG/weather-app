type WeatherObjectType = {
    id: number,
    main: string,
    icon: string,
};

export type GetWeatherResponseType = {
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

export type GetGeoCityNameResponseType = {
    place_id: string,
    licence: string,
    osm_type: string,
    osm_id: string,
    boundingbox: Array<string>,
    lat: string,
    lon: string
    display_name: string,
    address: {
        city: string,
        county: string,
        state: string,
        country: string,
        counry_code: string,
    },
}
