// 1)  #6: Basic data types--Boolean and conditional statements if..else http://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val) {
  if (
    val <= 0 ||
    val === "" ||
    val === null ||
    val === undefined ||
    val === NaN
  )
    return "false";
  else return "true";
}

// 2)  #7: if..else and ternary operator http://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >== 5 && n < 10 ? n * 95 : n * 90;
}

// 3) #8: Conditional statement--switch http://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month) {
  var days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    case 2:
      days = 28;
      break;

    default:
      days = "there is no such month";
  }
  return days;
}
