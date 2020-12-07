// Number object and its properties http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n) {
  if (n > Number.MAX_VALUE) return "Input number is Number.POSITIVE_INFINITY";
  if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (n < -Number.MAX_VALUE) return "Input number is Number.NEGATIVE_INFINITY";
  if (isNaN(n)) return "Input number is Number.NaN";
  else return "Input number is " + n;
}

// Methods of Number object--toString() and toLocaleString():  https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
  if (r.toString(16).length < 2) red = "0" + r.toString(16);
  else red = r.toString(16);
  if (g.toString(16).length < 2) green = "0" + g.toString(16);
  else green = g.toString(16);
  if (b.toString(16).length < 2) blue = "0" + b.toString(16);
  else blue = b.toString(16);
  return "#" + red + green + blue;
}

// Methods of Number object--toFixed(), toExponential() and toPrecision() http://www.codewars.com/kata/57256064856584bc47000611
