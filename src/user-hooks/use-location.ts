import { WeatherApi } from '../services/weather-api';
import { DispatchType } from '../types/action-types';

export function useLocation(
  weatherApi: WeatherApi, dispatch: DispatchType,
  action: (weatherApi: WeatherApi, latitude: number, longitude: number) => (dispatch: DispatchType) => void,
): void {
  const onSuccess = ({ coords: { latitude, longitude } }: Position) => {
    dispatch(action(weatherApi, latitude, longitude));
  };
  const onError = (err: PositionError) => console.warn(`ERROR(${err.code}): ${err.message}`);
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
