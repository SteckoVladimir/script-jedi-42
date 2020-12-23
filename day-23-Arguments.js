//  Unpacking arguments http://www.codewars.com/kata/unpacking-arguments

function spread(func, args) {
  return func(...args);
}
// or (I practice
const spread = (func, args) => func(...args);

// For the sake of argument http://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...itemsToCheck) {
  for (let i = 0; i < itemsToCheck.length; i++) {
    if (typeof itemsToCheck[i] !== "number") return false;
  }
  return true;
}
