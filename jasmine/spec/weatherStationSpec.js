describe('Weather Station', function () {
  var weatherStation = new WeatherStation;

  describe('Weather creates random weather', function () {
    it('should sample weather producing probabilistic weather conditions', function () {
      expect(weatherStation.generateWeather() == 'sunny' || weatherStation.generateWeather() == 'stormy').toBeTruthy();
    });
  });
});
