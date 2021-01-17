//  Generators #1 https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
  let i = 1;
  while (true) {
    let val = yield i++;
    if (val !== undefined) i = val;
  }
}

//  Generators #2 https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(a) {
  for (let i = 1; i <= Infinity; i++) {
    yield `${a} x ${i} = ${a*i}`;
  }
}
