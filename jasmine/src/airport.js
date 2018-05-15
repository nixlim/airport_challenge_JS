var Airport = function() {

  const  DEFAULT_CAPACITY = 10;
  this.capacity = DEFAULT_CAPACITY;
  this.planes = [];
};

Airport.prototype.orderLand = function(plane, weatherStation) {
  weatherStation.generateWeather();
  plane.land();
};

Airport.prototype.orderTakeoff = function (plane) {
  plane.takeoff();
}
