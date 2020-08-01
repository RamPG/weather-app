type GetResourceResponseType = {
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

type TransformDataType = {
  location: string,
  latitude: number,
  longitude: number,
};

export class GeoAPI {
  protected apiKey: string = '5ec4c010199d2c';

  protected transformData({ display_name, lat, lon }: GetResourceResponseType): TransformDataType {
    return {
      location: display_name.split(', ')[0],
      latitude: Number(lat),
      longitude: Number(lon),
    };
  }

  async getResource<T>(cityName: number): Promise<T> {
    const url = `https://eu1.locationiq.com/v1/search.php?key=${this.apiKey}&q=${cityName}&format=json&accept-language=en`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getGeoCity(cityName: number): Promise<TransformDataType> {
    const geoCityData = await this.getResource<Array<GetResourceResponseType>>(cityName);
    return this.transformData(geoCityData[0]);
  }
}
