(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(canvas) {
    this.ship = new Asteroids.Ship([(Game.DIM_X/2),(Game.DIM_Y/2)], [0,0]);
    this.ctx = canvas.getContext("2d");
    this.asteroids = [];
  };

  Game.FPS = 30;
  Game.DIM_X = 500;
  Game.DIM_Y = 500;

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(
        Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
  };

  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var that = this;
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx)
    });
    this.ship.draw(this.ctx);
  };

  Game.prototype.move = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
    this.ship.move();
  }

  Game.prototype.start = function() {
    this.addAsteroids(50);
    this.bindKeyHandlers();
    var that = this;
    window.setInterval(function() {that.step()}, Game.FPS);
  };

  Game.prototype.step = function() {
    this.move();
    this.draw();
    this.checkCollisions();
  };

  Game.prototype.checkCollisions = function() {
    for(var i=0; i<this.asteroids.length; i++){
      if(this.ship.isCollideWith(this.asteroids[i])){
        this.asteroids[i].color = "red"

      }
    }
  };

  Game.prototype.bindKeyHandlers = function(){
    var that = this;
    key('up',    function() {that.ship.power([ 0, -1]);});
    key('down',  function() {that.ship.power([ 0,  1]);});
    key('left',  function() {that.ship.power([-1,  0]);});
    key('right', function() {that.ship.power([ 1,  0]);});
  };

})(this);