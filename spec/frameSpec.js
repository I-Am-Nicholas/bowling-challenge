describe('Frame', function() {
  var frame;

  it('returns a random number between 0 and 10', function(){
    frame = new Frame();
    expect(frame.roll()).toBeLessThan(11);
  });

  describe("Strike", function() {

    it('is registered on the first roll when all ten pins have been knocked down.', function(){
      spyOn(frame, 'roll').and.returnValue(10)
      spyOn(frame, 'checkWhichRoll').and.returnValue(1)
      expect(frame.strike()).toBe(true)
    });

    it('is not registered on the second roll when all ten pins have been knocked down.', function(){
      spyOn(frame, 'roll').and.returnValue(10)
      spyOn(frame, 'checkWhichRoll').and.returnValue(2)
      expect(frame.strike()).toBe(false)
    });
  });

});
