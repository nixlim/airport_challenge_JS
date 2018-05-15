describe("Airport", function() {
    var airport = new Airport;
//
// beforeEach(function() {
//   var airport = new Airport();
// });

  describe('Create new instance of airport', function() {
    it('Creates new airport object', function() {
      expect(airport).toBeDefined();
    });

    it('Creates new airports with a capacity', function() {
      expect(airport.capacity).toEqual(10);
    });
});
});
