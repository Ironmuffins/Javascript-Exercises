let num1 = "90"  //fortesting
let num2 = 2  //fortesting
let sumtotal = 0
// function will take only 2 paramaters
const sumAll = function(num1, num2) {
//both paramaters need to be numbers, if not a number (string or array, return error)
if (typeof num1 === "string") {return 'ERROR'}
if (typeof num2 === "string") {return 'ERROR'}
if (isNaN(num1)) {return 'ERROR'}
if (isNaN(num2)) {return 'ERROR'} 
if (Math.sign(num1) == -1) {return 'ERROR'}
if (Math.sign(num2) == -1) {return 'ERROR'}
//compare both numbers
  if (num1 > num2) {
  biggernumber = num1;
  smallernumber = num2;
  }
  else {
      biggernumber = num2;
      smallernumber = num1;
  }
  //Sum the numbers with loop
  sumtotal = 0;
  for (i = smallernumber; i <= biggernumber; i++) {
      sumtotal += i;
  }
  //return the new sum
  return sumtotal;
}

module.exports = sumAll
