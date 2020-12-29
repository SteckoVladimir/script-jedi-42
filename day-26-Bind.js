//  Power of bind http://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    const correctCtx = this === global ? ctx : this;
    return func.apply(correctCtx, args);
  }
};

// Sort with Arrow Functions https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age);
};

// P.S.: учитель, мне уже так нравятся стрелочные функции, что хочу рефакторить до такого:
const OrderPeople = people => people.sort((a,b) => a.age-b.age)
// учитель, спасибо Вам!
