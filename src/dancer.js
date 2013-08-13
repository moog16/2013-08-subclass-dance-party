var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
  this.$node.mouseover(function(e){
    var $target = $(e.currentTarget.lastElementChild);
    rotate($target.closest('img'));
  });
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  this.top = top;
  this.left = left;
  this.$node.css({top: top, left: left});
};


var getRotationDegrees = function(transformString) {
  if (!transformString || transformString == 'none') return 0;
  var splits = transformString.split(',');
  var parenLoc = splits[0].indexOf('(');
  var a = parseFloat(splits[0].substr(parenLoc+1));
  var b = parseFloat(splits[1]);
  var rad = Math.atan2(b, a);
  var deg = 180 * rad / Math.PI;
  if (deg < 0) deg += 360;
  return deg;
};

var rotate = function(node) {
  var deg = getRotationDegrees(node.css('WebkitTransform'));
  deg += 90;
  node.css('WebkitTransform', 'rotate(' + deg + 'deg)');
};
