// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments

function solution(...itemsToCheck) {
  const set = new Set(itemsToCheck);
  if (set.size !== itemsToCheck.length) {
    return true;
  }
  return false;
}

// Last Argument http://www.codewars.com/kata/last

function last(list) {
  const lastEl = arguments[arguments.length - 1];
  return lastEl[lastEl.length - 1] || lastEl;
}
