describe("Airport", function() {
  var airport = new Airport;
  var plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
  var anotherPlane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
  var yetAnotherPlane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
  var weatherStation = jasmine.createSpyObj('weatherStation', {'generateWeather':'sunny'});
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
    beforeEach(function () {
      airport.capacity = 2;
    });
    afterEach(function () {
      airport.capacity = 10;
    });
    it('Issues command to #land', function () {
      airport.orderLand(plane, weatherStation);
      expect(plane.land).toHaveBeenCalled();
    });

    it('Pushes plane into planes array upon landing', function(){
      airport.orderLand(plane, weatherStation);
      expect(airport.planes).toContain(plane);
    });

    it('Doesn\'t allow a plane to land if airport is at full capacity', function(){
      airport.orderLand(plane, weatherStation);
      airport.orderLand(yetAnotherPlane, weatherStation);
      expect(function() {airport.orderLand(anotherPlane, weatherStation)}).toThrow('Airport Full');
    });

    it('should prevent the plane from landing if it is already parked', function () {
      airport.orderLand(plane, weatherStation);
      expect(function () {airport.orderLand(plane, weatherStation)}).toThrow('Plane already docked');
    });
  });

  describe('Airpot orders planes to take off', function(){
    it('Removes plane from planes array upon takeoff', function(){
       airport.orderLand(plane, weatherStation);
       airport.orderTakeoff(plane, weatherStation);
       expect(airport.planes).not.toContain(plane);
    });

    it('should throw an error if the plane is not in the airport', function () {
      expect(function () {airport.orderTakeoff(plane, weatherStation)}).toThrow('Plane is not at the airport')
    });

  });

  describe('Airport checks weather', function() {
    it('Should check weather before #orderLand', function() {
      airport.orderLand(plane, weatherStation);
      expect(weatherStation.generateWeather).toHaveBeenCalled();
    });

    it('Should prevent landing if stormy', function(){
      expect(function() {airport.orderLand(plane, badWeatherStation)}).toThrow('The weather is too bad for landing')
    });

    it('Should prevent takeOff if stormy', function(){
      airport.orderLand(plane, weatherStation);
      expect(function () {airport.orderTakeoff(plane, badWeatherStation)}).toThrow('The weather is too bad for take off')

    });

});
});
