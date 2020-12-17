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

function countGrade(scores) {
  const workArr = scores;
  const S = workArr.filter((x) => x == 100).length;
  const A = workArr.filter((x) => x < 100 && x >= 90).length;
  const B = workArr.filter((x) => x < 90 && x >= 80).length;
  const C = workArr.filter((x) => x < 80 && x >= 60).length;
  const D = workArr.filter((x) => x < 60 && x >= 0).length;
  const X = workArr.filter((x) => x < 0).length;
  const totalObj = { S, A, B, C, D, X };
  return totalObj;
}

//#28: methods of arrayObject---every() and some() http://www.codewars.com/kata/57308546bd9f0987c2000d07



