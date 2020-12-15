// #25: methods of arrayObject---reverse() and sort() http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr){
 const workArr = [...arr];
 const totalArr = [];
  workArr.sort((a,b) =>{
    if (a > b) return b - a;
    if (a !== b) return 1;
  });
return workArr;
}
