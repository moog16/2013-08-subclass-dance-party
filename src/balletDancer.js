var BalletDancer = function(top, left){
  Dancer.call(this, top, left, 50);
  //this.$node = this.$node.append('<img src="lib")
  this.$node.addClass('ballet');
  this.$node.append('<img src="lib/images/ballet.jpg" />');
  this.isHeadedRight = true;
  this.isHeadedUp = true;
  this.setPosition(top, left);
  this._width = 50;
};

BalletDancer.prototype = Object.create(Dancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;
BalletDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var height = $(window).height();
  var width = $(window).width();

  if (this.top < height && this.isHeadedUp) {
    this.top += 10;
    if (this.top >= height) this.top = height;
  }
  else if (this.top > 0 && !this.isHeadedUp) {
    this.top -= 10;
    if (this.top <= 0) this.top = 0;
  }

  if (this.left < width && this.isHeadedRight) {
    this.left += 10;
    if (this.left >= width) this.left = width;
  } else if (this.left > 0 && !this.isHeadedRight) {
    this.left -= 10;
    if (this.left <= 0) this.left = 0;
  }

  if (this.top === height || this.top === 0) this.isHeadedUp = !this.isHeadedUp;
  if (this.left === width || this.left === 0) this.isHeadedRight = !this.isHeadedRight;

  this.setPosition(this.top, this.left);
};


var result = result ? result : 0;