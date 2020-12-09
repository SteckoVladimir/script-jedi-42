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

function topSecret(str){
  return str
            .split('')
            .map( char => String.fromCharCode(char.charCodeAt() - 3))
            .join('');
}

//question1: The top secret file number is...
answer1="?";
//question2: Super agent's name is...
answer2="?";
//question3: He stole the treasure is...
answer3="?";

// #21:  Methods of String object--trim() and the string template http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s){
  const str = s.trim();
  return ${str}\n${str.repeat(2)}\n${str.repeat(3)}\n${str.repeat(4)}\n${str.repeat(5)}
}
