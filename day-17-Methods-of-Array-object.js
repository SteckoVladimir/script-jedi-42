// #29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr){
  const workArr = [].concat(...arr);
  const workArrSort = workArr.sort((a,b)=>b-a);
  const result = workArrSort.join('>');
  return result;
}
