//  #9: loop statement --while and do..while http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  var i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      str = "*" + str;
      i++;
    } else {
      str = str + "*";
      i++;
    }
  }
  return str;
}


// #10: loop statement --for http://www.codewars.com/kata/5721a78c283129e416000999

