describe('Weather Station', function () {
  var weatherStation = new WeatherStation;

  describe('Weather creates random weather', function () {
    it('should sample weather producing probabalistic weather conditions', function () {
      expect(weatherStation.generateWeather()).toEqual('sunny' || 'stormy');
    });
  });
});