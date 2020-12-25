// #19: Methods of String object--toUpperCase() toLowerCase() and replace() http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const strUpperCaseSplit = str.toUpperCase().split(" ");
  for (let i = 0; i < strUpperCaseSplit.length; i++) {
    strUpperCaseSplit[i] =
      strUpperCaseSplit[i].slice(0, -1) +
      strUpperCaseSplit[i].slice(-1).toLowerCase();
  }
  const result = strUpperCaseSplit.join(" ");
  return result;
}

// #20: Methods of String object--charAt() charCodeAt() and fromCharCode() http://www.codewars.com/kata/57284d23e81185ae6200162a

function topSecret(str){
  const strArr = str.split('');
  const totalArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].charCodeAt() > 67 && strArr[i].charCodeAt() <= 90) totalArr.push(String.fromCharCode(strArr[i].charCodeAt() - 3));
    if (strArr[i].charCodeAt() > 99 && strArr[i].charCodeAt() < 123) totalArr.push(String.fromCharCode(strArr[i].charCodeAt() - 3));
    if (strArr[i].charCodeAt() > 123) totalArr.push(strArr[i]); 
    if (strArr[i].charCodeAt() < 65 )  totalArr.push(strArr[i]);
    if (strArr[i].charCodeAt() > 90 && strArr[i].charCodeAt() < 97)  totalArr.push(strArr[i]);
    if (strArr[i] === 'a') totalArr.push('x');
    if (strArr[i] === 'b') totalArr.push('y');
    if (strArr[i] === 'c') totalArr.push('z');
    if (strArr[i] === 'A') totalArr.push('X');
    if (strArr[i] === 'B') totalArr.push('Y');
    if (strArr[i] === 'C') totalArr.push('Z');
   }
return totalArr.join('');
}

// #21:  Methods of String object--trim() and the string template http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s){
  const str = s.trim();
  return ${str}\n${str.repeat(2)}\n${str.repeat(3)}\n${str.repeat(4)}\n${str.repeat(5)}
}
