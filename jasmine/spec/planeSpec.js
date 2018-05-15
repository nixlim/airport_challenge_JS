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

});
