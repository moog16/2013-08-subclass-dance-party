var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this._width = 20;
  this.$node.mouseover(function(e){
    changeColor($(e.currentTarget));
  });
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

var changeColor = function(node) {
  var color = node.css('border-color');
  color = color === 'rgb(255, 0, 0)' ? 'rgb(0, 0, 255)' : 'rgb(255, 0, 0)';
  node.css('border-color', color);
};
