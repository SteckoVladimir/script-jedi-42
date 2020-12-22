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
//Пример РЕКУРСИИ: ВАЖНО !!!
function threeInOne (a) {
  return a.length ? [a[0]+a[1]+a[2]].concat(threeInOne(a.slice(3))) : [];
}

const arr = [
  1,2,3,4,5,6,7,87,8,9,00,23,23,3,3
]
console.log(threeInOne(arr));

// вариант - дубовый:
function threeInOne(arr) {
  const workArr = [...arr];
  const totalArr = [];
  for (let i = 0; i < workArr.length; i += 3) {
    totalArr.push(
      workArr
        .slice(i, i + 3)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    );
  }
  return totalArr;
}
