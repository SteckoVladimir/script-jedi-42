//  Generators #1 https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
  let n;
  for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (n !== undefined) {
      i = n;
    }
    n = yield i;
  }
}
