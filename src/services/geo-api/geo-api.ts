import { GetGeoCoordsResponseType } from '../../types/response-types';

type TransformGeoDateType = {
  location: string,
  latitude: number,
  longitude: number,
};

export class GeoApi {
  protected apiKey: string = '5ec4c010199d2c';

  protected transformData({ display_name, lat, lon }: GetGeoCoordsResponseType): TransformGeoDateType {
    return {
      location: display_name.split(', ')[0],
      latitude: Number(lat),
      longitude: Number(lon),
    };
  }

  async getResource<T>(cityName: string): Promise<T> {
    const url = `https://eu1.locationiq.com/v1/search.php?key=${this.apiKey}&q=${cityName}&format=json&accept-language=en`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getGeoCity(cityName: string): Promise<TransformGeoDateType> {
    const geoCityData = await this.getResource<Array<GetGeoCoordsResponseType>>(cityName);
    return this.transformData(geoCityData[0]);
  }
}
