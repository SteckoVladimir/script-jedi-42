// #13 Syntax task	https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  if (body[body.length - 1] === tail[0]) return true;
  else return false;
}

// #14  Do I get a bonus https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "£" + salary * 10;
  }
  return "£" + salary;
}

// #15 Automorphic number https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
  let result = Math.pow(n, 2).toString();
  if (result.endsWith(n)) return "Automorphic";
  else return "Not!!";
}
