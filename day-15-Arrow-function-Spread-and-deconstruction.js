// #22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr, ...arrIndex){
  for (const [a, b] of arrIndex) {
  [arr[a],arr[b]] = [arr[b],arr[a]];
}
  return arr;
}

//  #23: methods of arrayObject---push(), pop(), shift() and unshift() http://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr,d,n){
  //  arr - массив  ,  d - 'sring'  ,  n - number;
  const shifted =  [...arr];
  const myArrSize = shifted.join().split(',').length;
  console.log(myArrSize);
   for (let block of shifted)
     if(d === "left") {
       for (let le of block) {
         if (le > n) le = le - n;
         if ( le === n) le = myArrSize;
         if ( le < n) le = le + myArrSize - n;

         
         console.log(le);
       }
     }  
  console.log(le);
}
