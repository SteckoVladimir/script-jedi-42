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
  const totalArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < 65 && str[i].charCodeAt() > 90 && str[i].charCodeAt() < 97 && str[i].charCodeAt() > 123) totalArr.push(str[i]);
    
    if (str[i].charCodeAt() > 67 && str[i].charCodeAt() <= 90) totalArr.push(String.fromCharCodeAt(str[i].charCodeAt() - 3));
    // A = 65 => X = 88  ; B = 66 => Y = 89  ;  C = 67 => Z = 90.
    if (str[i] = 'A') totalArr.push('X');
    if (str[i] = 'B') totalArr.push('Y');
    if (str[i] = 'C') totalArr.push('Z');
    
    if (str[i].charCodeAt() > 99 && str[i].charCodeAt() <= 123) totalArr.push(String.fromCharCodeAt(str[i].charCodeAt() - 3));
    // a = 97 => x = 121  ; b = 98 => y = 122  ;  c = 99 => z = 123.
    if (str[i] = 'a') totalArr.push('x');
    if (str[i] = 'b') totalArr.push('y');
    if (str[i] = 'c') totalArr.push('z');
  }
return totalArr;
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
