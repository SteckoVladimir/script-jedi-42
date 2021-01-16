//  Generators #1 https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator(n) {
 let counter = 0;
   for (let i =1; i < Number.MAX_SAFE_INTEGER; i++) {
   if (n !== undefined) yield counter = n;
   if (n === undefined) yield counter = i;
 }
 return counter;
}
