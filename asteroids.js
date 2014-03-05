Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
};

(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this color = color;
    this radius = radius;
  };

  MovingObject.prototype.move = function() {
    this.pos = [pos[0] + (vel[0] * _time_) , pos[1] + (vel[1] * _time_)]
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
  };

  MovingObject.prototype.isCollideWith = function(otherObject) {
    var totalDist = Math.sqrt(Math.pow(this.pos[0]-otherObject.pos[0],2) +
                    Math.pow(this.pos[0]-otherObject.pos[0],2));
    var totalRadius = this.radius + otherObject.radius;
    if(totalRadius >= totalDist) {
      return true;
    }
    else {
      return false;
    }
  };

})(this);