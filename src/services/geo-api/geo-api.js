export default class GeoAPI {

  _apiKey = '5ec4c010199d2c';

  _transformData(geoCityData) {
    const { display_name, lat, lon } = geoCityData;
    return {
      location: display_name.split(', ')[0],
      latitude: lat,
      longitude: lon,
    }
  }

  async getResource(cityName) {
    const url = `https://eu1.locationiq.com/v1/search.php?key=${this._apiKey}&q=${cityName}&format=json&accept-language=en`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getGeoCity(cityName) {
    const geoCityData = await this.getResource(cityName);
    return this._transformData(geoCityData[0]);
  }
}
