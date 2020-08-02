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
    weather: string | null,
};

export type DataCoordsStateType = {
    location: string,
    latitude: number,
    longitude: number,
};

export type SubStateType<D> = {
    loading: boolean,
    error: boolean,
    data: D
}

export type InitialStateType = {
    current: SubStateType<DataCurrentStateType>,
    daily: SubStateType<Array<DataDailyStateType>>,
    coords: SubStateType<DataCoordsStateType>,
};

export type GetStateType = () => InitialStateType;
