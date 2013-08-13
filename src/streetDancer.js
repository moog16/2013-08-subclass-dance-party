var StreetDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer street"><img class="streetDancer" src="lib/images/dancer.jpg" /></span>');
  this.$node.on('resize', function(e) {
    this._width = this._width === 50 ? 100 : 50;
  });
  this.setPosition(top, left);
  this._width = 50;
};

StreetDancer.prototype = Object.create(Dancer.prototype);
StreetDancer.prototype.constructor = StreetDancer;

var coordinateStreetDancers = function() {
  var newHeight = 50;
  setInterval(function() {
    $('.streetDancer').height(newHeight);
    newHeight = newHeight === 50 ? 100 : 50;
  }, 1000);
};
