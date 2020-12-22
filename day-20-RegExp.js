//#37: Unlock new weapon---RegExp Object http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const workResult = [];
  for (let i = 0; i < count.length; i++) {
    workResult.push((animals.match(new RegExp(count[i], "g")) || []).length);
  }
  return workResult;
}

// #39: Regular Expression--""?"", ""*"", ""+"" and ""{}"" https://www.codewars.com/kata/573bca07dffc1aa693000139

var regex=/^-?9\d*0000$/;
