var Plane = function () {
  this.flying = false;
};

Plane.prototype.takeoff = function () {
  this.flying = true;
};

Plane.prototype.land = function () {
  this.flying = false;
};
