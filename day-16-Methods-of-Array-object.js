// #25: methods of arrayObject---reverse() and sort() http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  const workArr = [...arr];
  workArr.sort((a, b) => {
    let elemACount = arr.slice().filter((x) => x === a).length;
    let elemBCount = arr.slice().filter((y) => y === b).length;
    if (elemACount === elemBCount) return b - a;
    if (elemACount > elemBCount) return 1;
    else return -1;
  });
  return workArr;
}

// #26: methods of arrayObject---map() http://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr) {
  return arr.map((val) => {
    if (val.length % 2 === 0)
      return val.slice(0, val.length / 2) + "|" + val.slice(val.length / 2);
    if (val.length % 2 != 0)
      return (
        val.slice(0, Math.floor(val.length / 2)) +
        "|" +
        val.slice(Math.floor(val.length / 2 + 1))
      );
  });
}

// #27: methods of arrayObject---filter() http://www.codewars.com/kata/573023c81add650b84000429

