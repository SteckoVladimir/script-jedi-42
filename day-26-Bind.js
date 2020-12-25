//  Power of bind http://www.codewars.com/kata/power-bind

// OMG...

// Sort with Arrow Functions https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age);
};

// P.S.: учитель, мне уже так нравятся стрелочные функции, что хочу рефакторить до такого:
const OrderPeople = people => people.sort((a,b) => a.age-b.age)
// учитель, спасибо Вам!
