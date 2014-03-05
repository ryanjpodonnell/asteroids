(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(canvas) {
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
  };

  Game.prototype.move = function() {
    //var that = this;
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  }

  Game.prototype.start = function() {
    this.addAsteroids(50);
    var that = this;
    window.setInterval(function() {that.step()}, Game.FPS);
  };

  Game.prototype.step = function() {
    this.move();
    this.draw();
  };

})(this);