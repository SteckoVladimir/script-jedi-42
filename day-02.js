// 1)  Basic data types--Number http://www.codewars.com/kata/571edd157e8954bab500032d

function equal2() {
  var a = v3;
  var b = v1;
  return a - b;
}
function equal3() {
  var a = v1;
  var b = v5;
  return a * b;
}
function equal4() {
  var a = v4;
  var b = v5;
  return a / b;
}
function equal5() {
  var a = v6;
  var b = v3;
  return a % b;
}

// 2) Basic data types--String http://www.codewars.com/kata/571edea4b625edcb51000d8e

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";

const Dad = () => d1 + a2 + d2;
const Bee = () => b1 + e2 + e2;
const banana = () => b2 + a2 + n2 + a2 + n2 + a2;

const answer1 = () => "no";
const answer2 = () => "no";
const answer3 = () => "yes";


// 3) Basic data types--Array http://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(1);
  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop(1);
  return arr;
}

// 4) Basic data types--Object - http://www.codewars.com/kata/571f1eb77e8954a812000837

function animal(obj) {
  const firstPartOfString = "This ";
  const emptyPlace = " ";
  const secondPathOfString = " has ";
  const lastPathOfString = " legs.";

  return (
    firstPartOfString +
    obj.color +
    emptyPlace +
    obj.name +
    secondPathOfString +
    obj.legs +
    lastPathOfString
  );
}
