//  #9: loop statement --while and do..while http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  const i = 1;
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

function pickIt(arr) {
  const odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else odd.push(arr[i]);
  }
  return [odd, even];
}


// #11: loop statement --break,continue http://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls){
  const  bag=[];
  for (let i = 0; i < dolls.length; i++){
    
    if (dolls[i] = "Hello Kitty" || dolls[i] === "Barbie doll" || dolls[i] === "Mickey Mouse" || dolls[i] === "Snow white") {       
      continue;
      
    } else if (i === "Hello Kitty" || i === "Barbie doll" || i === "Mickey Mouse" || i === "Snow white") {
      bag.push(dolls[i]);
    } else (dolls.length = 3){
      break;
    }
    
  }
  
  return bag;
}
