var BalletDancer = function(top, left){
  Dancer.call(this, top, left, 50);
  //	this.$node = $('<span class="ballet"><img src="lib/images/ballet.jpg" /></span>');
  this.isHeadedRight = true;
  this.isHeadedUp = true;
};

BalletDancer.prototype = Object.create(Dancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;
BalletDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var height = $(window).height();
  var width = $(window).width();

  if (this.top <= height && this.isHeadedUp) {
    this.top += 10;
  }
  else {
    this.top -= 10;
  }

  if (this.left <= width && this.isHeadedRight) {
    this.left += 10;
  } else {
    this.left -= 10;
  }

  if(this.top === height) {
    this.isHeadedUp = false;
  }
  if(this.top === 0) {
    console.log(this.top);
    this.isHeadedUp = true;
  }
  if(this.left === width) {
    this.isHeadedRight = false;
  }
  if(this.left === 0) {
    this.isHeadedRight = true;
  }

  this.setPosition(this.top, this.left);
};
