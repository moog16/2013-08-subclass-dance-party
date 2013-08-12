var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.step = function(){
    setTimeout(this.step, timeBetweenSteps);
  };
  this.step();
  this.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  this.setPosition(top, left);
};

var clone = function(obj) {
  if (obj) {
    clone.prototype = obj;
    return new clone();
  }
};
