//#37: Unlock new weapon---RegExp Object http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const workResult = [];
  for (let i = 0; i < count.length; i++) {
    workResult.push((animals.match(new RegExp(count[i], "g")) || []).length);
  }
  return workResult;
}

// #38: Regular Expression--""^"",""$"", ""."" and test() http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str,word){
const re = new RegExp('^' + word[0] + '.{' + (word.length - 2) +'}'
  + word.slice(-1) + '$');
  return str
    .split(' ')
    .filter(w => re.test(w))
    .join(' ');
}

// #39: Regular Expression--""?"", ""*"", ""+"" and ""{}"" https://www.codewars.com/kata/573bca07dffc1aa693000139

var regex=/^-?9\d*0000$/;
