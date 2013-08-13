describe("balletDancer", function() {

  var balletDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    balletDancer = new BalletDancer(10, 20);
  });

  it("should have a jQuery $node object", function(){
    expect(balletDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node move", function() {
    sinon.spy(balletDancer.$node, 'toggle');
    balletDancer.step();
    expect(balletDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(balletDancer, "step");
      expect(balletDancer.step.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(balletDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(balletDancer.step.callCount).to.be.equal(2);
    });
  });

  describe("changeColor", function(){
    it("should call changeColor on mouseover", function(){
      changeColor = sinon.spy();
      balletDancer.$node.trigger('mouseover');
      expect(changeColor.called).to.be.true;
    });
  });


});
