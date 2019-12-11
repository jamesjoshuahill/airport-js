describe("Airport", function () {
  it("starts with no planes", function() {
      var airport = new Airport();
      var plane = jasmine.createSpy('plane');

      expect(airport.isLanded(plane)).toEqual(false);
  })

  it("can land a flying plane", function () {
    var airport = new Airport();
    var plane = jasmine.createSpy('plane');

    airport.land(plane);

    expect(airport.isLanded(plane)).toEqual(true);
  });

  it("fails to land a plane that has already landed", function() {
    var airport = new Airport();
    var plane = jasmine.createSpy('plane');
    airport.land(plane);

    expect(function() {
      airport.land(plane);
    }).toThrow(new Error("plane has already landed"));
  });
})
