var sum = function(){
  var result = 0;
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(i) {result+=i})
  return result
}


var Person = function(name) {
  this.name = name;

}

printAttributes = function(age, height, weight) {
  console.log(this.name + ", " + age + ", " + height + ", " + weight);
}

Function.prototype.myBind = function(obj){
  var that = this;
  var args = Array.prototype.slice.call(arguments)
  console.log(args.slice(1))
  return function(){
    var args2 = Array.prototype.slice.call(arguments)
    console.log(args2)
    that.apply(obj, args.slice(1).concat(args2))
  }
}
//
// var tony = new Person("tony");
// var newFunc = printAttributes.myBind(tony,1,2);
// newFunc(3);

var curriedSum = function(numArgs) {
  var numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if(numbers.length === numArgs) {
      var sum = 0;
      for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));


Function.prototype.curry = function(numArgs){
  var that = this;
  var args = []
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply({},args);
    }
    else {
      return _curry;
    }
  };

  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sumThree(4, 20, 3)); // == 27



console.log(sumThree.curry(3)(4)(20)(3)); // == 27
