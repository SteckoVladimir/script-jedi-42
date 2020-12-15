// #22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr, ...arrIndex){
  for (const [a, b] of arrIndex) {
  [arr[a],arr[b]] = [arr[b],arr[a]];
}
  return arr;
}

//  #23: methods of arrayObject---push(), pop(), shift() and unshift() http://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr, d, n) {
  const shifted = arr;
  for (let i = 1; i <= n; i++) {
    if (d === "left") {
      shifted[2].push(shifted[0].shift());
      shifted[1].push(shifted[2].shift());
      shifted[0].push(shifted[1].shift());
    }
    if (d === "right") {
      shifted[0].unshift(shifted[2].pop());
      shifted[2].unshift(shifted[1].pop());
      shifted[1].unshift(shifted[0].pop());
    }
  }
  return shifted;
}

// #24: methods of arrayObject---splice() and slice() http://www.codewars.com/kata/572cb264362806af46000793


