// How new works https://www.codewars.com/kata/how-new-works

let myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.myFunc = MyObject.constructor;
myObj.constructor();

// Replicate new http://www.codewars.com/kata/replicate-new

const nouveau = (Constructor, ...args) => Reflect.construct(Constructor, args);
