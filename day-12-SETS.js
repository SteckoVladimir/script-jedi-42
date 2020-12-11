// Playing with Sets : Equal or Not ?	https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2){

  for (let value of s1) {
    if (s1.has(value) === s2.has(value)) {
      return true;
    } return false;
  }
}

function notEqual(s1, s2){

  for (let value of s1) {
    if (s1.has(value) !== s2.has(value)) {
      return true;
    } 
  } return false;
}
