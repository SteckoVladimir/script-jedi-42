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

#20: Methods of String object--charAt() charCodeAt() and fromCharCode() http://www.codewars.com/kata/57284d23e81185ae6200162a

