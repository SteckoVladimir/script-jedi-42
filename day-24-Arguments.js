// Duplicate arguments http://www.codewars.com/kata/duplicate-arguments

function solution(...itemsToCheck) {
  const set = new Set(itemsToCheck);
  if (set.size !== itemsToCheck.length) {
    return true;
  }
  return false;
}

// Last Argument http://www.codewars.com/kata/last

