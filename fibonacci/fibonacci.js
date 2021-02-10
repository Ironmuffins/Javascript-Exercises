const fibonacci = function(n) {
let fibonacciArray = [1, 1];
for (let i = 2; i < n; i ++) {
    //sum last two array items
    newValue = fibonacciArray[fibonacciArray.length -1] + fibonacciArray[fibonacciArray.length -2];
    //add new sum to array
    fibonacciArray.push(newValue);
}
return fibonacciArray[fibonacciArray.length -1];
}
module.exports = fibonacci