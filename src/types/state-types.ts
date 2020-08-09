export type DataCurrentStateType = {
    imgLink: string,
    temp: string,
    feelsLike: string,
    humidity: number,
    weather: string,
    windSpeed: number,
};

export type DataDailyStateType = {
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
    current: SubStateType<DataCurrentStateType>,
    daily: SubStateType<Array<DataDailyStateType>>,
    coords: SubStateType<DataCoordsStateType>,
};
