// Number object and its properties http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n){
  if (n > Number.MAX_VALUE) return "Input number is Number.POSITIVE_INFINITY";
  if (n === Number(100)) return "Input number is 100";
  if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  
  if (n < -Number.MAX_VALUE) return "Input number is Number.NEGATIVE_INFINITY";
  if (n !== Number) return "Input number is Number.NaN";
  else 'Input number is ' + n;
  
}
