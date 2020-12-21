#37: Unlock new weapon---RegExp Object http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const workResult = [];
  for (let i = 0; i < count.length; i++) {
    workResult.push((animals.match(new RegExp(count[i], "g")) || []).length);
  }
  return workResult;
}
