var StreetDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer street"><img class="streetDancer" src="lib/images/dancer.jpg" /></span>');
  this.setPosition(top, left);
};

StreetDancer.prototype = Object.create(Dancer.prototype);
StreetDancer.prototype.constructor = StreetDancer;

var coordinateStreetDancers = function() {
  var newHeight = 50;
  setInterval(function() {
    $('.streetDancer').height(newHeight);
    if (newHeight === 50) {
      newHeight *= 2;
    }
    else {
      newHeight *= 0.5;
    }
  }, 1000);
};