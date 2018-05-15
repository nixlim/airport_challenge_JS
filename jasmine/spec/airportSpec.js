describe("Airport", function() {
    var airport = new Airport;
    var plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
    var weatherStation = jasmine.createSpyObj('weatherStation', ['generateWeather'] );
    var badWeatherStation = jasmine.createSpyObj('badWeatherStation', {'generateWeather':'stormy'});


  describe('Create new instance of airport', function() {
    it('Creates new airport object', function() {
      expect(airport).toBeDefined();
    });

    it('Creates new airports with a capacity', function() {
      expect(airport.capacity).toEqual(10);
    });

    it('Creates new airports with an empty array for planes', function () {
      expect(airport.planes).toEqual([]);
    });
});

  describe('Airport can call #land on Plane', function () {
      it('Issues command to #land', function () {
        airport.orderLand(plane, weatherStation);
        expect(plane.land).toHaveBeenCalled();
      });
  });

  describe('Airport checks weather', function() {
    it('Should check weather before #orderLand', function() {
      airport.orderLand(plane, weatherStation);
      expect(weatherStation.generateWeather).toHaveBeenCalled();
  });

});
});
