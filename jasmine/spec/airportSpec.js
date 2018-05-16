describe("Airport", function() {
    var airport = new Airport;
    var plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
    var weatherStation = jasmine.createSpyObj('weatherStation', ['generateWeather'] );
    var badWeatherStation = jasmine.createSpyObj('badWeatherStation', {'generateWeather':'stormy'});
    afterEach(function(){

      airport.planes = [];
    });

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

  describe('Airport lands Planes', function () {
      it('Issues command to #land', function () {
        airport.orderLand(plane, weatherStation);
        expect(plane.land).toHaveBeenCalled();
      });

      it('Pushes plane into planes array upon landing', function(){
        airport.orderLand(plane, weatherStation);
        expect(airport.planes).toContain(plane);

      });

      it('Doesn\'t allow a plane to land if airport is at full capacity', function(){
        for (i =1; i <=10; i++) {
          airport.orderLand(plane, weatherStation);
        };
        // console.log(airport.capacity);
        // // airport.orderLand(plane, weatherStation);
        // console.log(airport.capacity);
        expect(function() {airport.orderLand(plane, weatherStation)}).toThrow('Airport Full');

      });
  });

  describe('Airpot orders planes to take off', function(){
    it('Removes plane from planes array upon takeoff', function(){
       airport.orderLand(plane, weatherStation);
       airport.orderTakeoff(plane, weatherStation);
       expect(airport.planes).not.toContain(plane);

    });

  });

  describe('Airport checks weather', function() {
    it('Should check weather before #orderLand', function() {
      airport.orderLand(plane, weatherStation);
      expect(weatherStation.generateWeather).toHaveBeenCalled();
  });

});
});
