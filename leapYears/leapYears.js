const leapYears = function(year) {
//set eception rule true for years divisible by 400
if (year % 400 == 0) {return true}
//set exception rule false for years divisible by 100
else if (year % 100 == 0) {return false}
//set rule true for every year divisible by 4
else if (year % 4 == 0) {return true}
//all other years return false
else {return false}
}

module.exports = leapYears
