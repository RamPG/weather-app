export type TransformedDailyDataType = {
    id: number,
    imgLink: string,
    weekDayName: string,
    monthDay: number,
    monthDayName: string,
    temp: {
        day: string,
        night: string,
    },
    weather: string,
};

export type TransformedCurrentDataType = {
    imgLink: string,
    temp: string,
    feelsLike: string,
    humidity: number,
    weather: string,
    windSpeed: number,
};

export type DataWeatherStateType = {
    daily: Array<TransformedDailyDataType>,
    current: TransformedCurrentDataType
};

export type DataCoordsStateType = {
    location: string,
    latitude: number,
    longitude: number,
};

export type SubStateType<D> = {
    isLoading: boolean,
    isError: boolean,
    data: D
}

export type InitialStateType = {
    weather: SubStateType<DataWeatherStateType>,
    coords: SubStateType<DataCoordsStateType>,
};
