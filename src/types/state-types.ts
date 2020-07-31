export type DataCurrentStateType = {
    imgLink: string | null,
    temp: number | null,
    feelsLike: number | null,
    humidity: number | null,
    weather: string | null,
    windSpeed: number | null,
};

export type DataDailyStateType = {
    id: number,
    imgLink: string,
    weekDayName: string,
    monthDay: string,
    monthDayName: string,
    temp: {
        day: number,
        night: number,
    },
    weather: string,
};

export type DataCoordsStateType = {
    latitude: number,
    longitude: number,
};

export type CurrentStateType = {
    loading: boolean,
    error: boolean,
    data: DataCurrentStateType,
};

export type DailyStateType = {
    loading: boolean,
    error: boolean,
    data: Array<DataDailyStateType>,
};

export type CoordsStateType = {
    loading: boolean,
    error: boolean,
    data: DataCoordsStateType,
};

export type InitialStateType = {
    location: string,
    current: CurrentStateType,
    daily: DailyStateType,
    coords: CoordsStateType,
};
