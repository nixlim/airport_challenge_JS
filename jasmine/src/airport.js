var Airport = function() {

  const  DEFAULT_CAPACITY = 10;
  this.capacity = DEFAULT_CAPACITY;
  this.planes = [];
};

Airport.prototype.orderLand = function(plane, weatherStation) {
  weatherStation.generateWeather();
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.orderTakeoff = function (plane, weatherStation) {
  plane.takeoff();
  this.planes.splice(this.planes.indexOf(plane), 1);
}
