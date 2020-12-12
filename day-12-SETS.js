// Playing with Sets : Equal or Not ?	https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  if (s1.size === s2.size) {
    for (let value of s1) {
      if (!s2.has(value)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}
