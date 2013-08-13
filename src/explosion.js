var Explosion = function(top,left) {
  this.$node = $('<img src="lib/images/explosion.gif" />');
  this.setPosition(top, left);
};

Explosion.prototype.setPosition = function(top, left){
  this.$node.css({top: top, left: left});
};