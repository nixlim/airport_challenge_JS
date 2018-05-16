var Airport = function() {

  const  DEFAULT_CAPACITY = 10;
  this.capacity = DEFAULT_CAPACITY;
  this.planes = [];
};

Airport.prototype.orderLand = function(plane, weatherStation) {
  weatherStation.generateWeather();
  if (this.planes.length >= this.capacity){
    throw 'Airport Full';
  } else if (this.planes.includes(plane)){
    throw 'Plane already docked';
  }
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.orderTakeoff = function (plane, weatherStation) {
  if (!this.planes.includes(plane)) {
    throw 'Plane is not at the airport';
  }
  plane.takeoff();
  this.planes.splice(this.planes.indexOf(plane), 1);
}
