//  Call function using apply http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function(thatArgs, ...args) {
  return this.apply(thatArgs, args);
}

// Anonymous returns http://www.codewars.com/kata/anonymous-returns

name = "The Window";
const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    return () => this.name;
  },
};

