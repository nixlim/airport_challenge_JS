var WeatherStation = function() {

};

WeatherStation.prototype.generateWeather = function() {
  var conditions = ['sunny', 'sunny', 'sunny', 'sunny', 'stormy'];
  var weather = conditions[Math.floor(Math.random()*conditions.length)];
  return weather;
};
