Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
};

function Dog () {};
Dog.prototype.bark = function () {
  console.log("Bark!");
};

function Corgi () {};
Corgi.inherits(Dog);

new Corgi().bark();