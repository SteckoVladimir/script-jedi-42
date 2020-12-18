// #29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr){
  const workArr = [].concat(...arr);
  const workArrSort = workArr.sort((a,b)=>b-a);
  const result = workArrSort.join('>');
  return result;
}

//  #30: methods of arrayObject---reduce() and reduceRight() http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  const workArr = [...arr];
  const tailArr = [];
  const headArr = [];
  const totalArr = [];

  for (let i = 0; i < workArr.length - 1; i++) {
    tailArr.push(+String(workArr[i]).slice(-1));
  }
  for (let i = 1; i < workArr.length; i++) {
    headArr.push(+String(workArr[i]).slice(0, 1));
  }
  for (let i = 0; i < headArr.length; i++) {
    totalArr.push(headArr[i] + tailArr[i]);
  }

  const result = totalArr.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  return result;
}

// #31: methods of arrayObject---isArray() indexOf() and toString() http://www.codewars.com/kata/5732b0351eb838d03300101d

 

