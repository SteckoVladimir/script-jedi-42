// #22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr, ...arrIndex){
  for (const [a, b] of arrIndex) {
  [arr[a],arr[b]] = [arr[b],arr[a]];
}
  return arr;
}

//  #23: methods of arrayObject---push(), pop(), shift() and unshift() http://www.codewars.com/kata/572af273a3af3836660014a1

