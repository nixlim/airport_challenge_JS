var Plane = function () {
  this.flying = false;
};

Plane.prototype.takeoff = function () {
  this.flying = true;
};

var plane = new Plane();
console.log(plane);
plane.takeoff();
console.log(plane);