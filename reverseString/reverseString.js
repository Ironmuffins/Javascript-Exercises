//make function with string as paramater
const reverseString = function(string) {
    //Declare/Reset variable which will store new string
        let reversedString = '';
        for (let n = 1; n <= string.length; n++) {
            //concatenate characters in reverse order, add to new variable
            reversedString += (string.charAt(string.length -n));
        }
    //return reversed string
    return reversedString;
    }

module.exports = reverseString
