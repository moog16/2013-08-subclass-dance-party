var BlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  var oldStep = blinkyDancer.step;
  blinkyDancer.step = function(){
    oldStep();
    blinkyDancer.$node.toggle();
  };
  return blinkyDancer;
};

//messing with the prototype
ChildClass.prototype = clone(Dancer.prototype);
ChildClass.prototype.constructor = ChildClass;

