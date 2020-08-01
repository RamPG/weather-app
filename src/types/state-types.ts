export type DataCurrentStateType = {
    imgLink: string | null,
    temp: string | null,
    feelsLike: string | null,
    humidity: number | null,
    weather: string | null,
    windSpeed: number | null,
};

export type DataDailyStateType = {
    id: number | null,
    imgLink: string | null,
    weekDayName: string | null,
    monthDay: number | null,
    monthDayName: string | null,
    temp: {
        day: string | null,
        night: string | null,
    },
    weather: string | null,
};

export type DataCoordsStateType = {
    latitude: number | null,
    longitude: number | null,
};

export type SubStateType<D> = {
    loading: boolean,
    error: boolean,
    data: D
}

export type InitialStateType = {
    location: string,
    current: SubStateType<DataCurrentStateType>,
    daily: SubStateType<Array<DataDailyStateType>>,
    coords: SubStateType<DataCoordsStateType>,
};
