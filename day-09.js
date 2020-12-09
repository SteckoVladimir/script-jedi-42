// #16: Methods of String object--slice(), substring() and substr() http://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
  let minLengthValue = arr[0].length;
  const totalArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < minLengthValue) {
      minLengthValue = arr[i].length;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    totalArr.push(arr[i].slice(0, minLengthValue));
  }
  return totalArr;
}


// #17: Methods of String object--indexOf(), lastIndexOf() and search() http://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str, c) {
  if (str.lastIndexOf(c) === -1) {
    return -1;
  }
  return str.lastIndexOf(c) - str.indexOf(c);
}

