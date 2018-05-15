describe("Plane", function() {
  var plane = new Plane;

// beforeEach(function() {
//   plane = new Plane();
// });
  describe('Plane responds to #takeOff', function () {
    it('changes status to flying on takeoff', function () {
      plane.takeoff();
      expect(plane.flying).toBeTruthy();
    });
  });


  describe('Plane responds to #land', function() {
    it('changes flying status to false', function () {
      plane.takeoff();
      console.log(plane);
      plane.land();
      console.log(plane);
      expect(plane.flying).toBeFalsy();
    });



  });

});
