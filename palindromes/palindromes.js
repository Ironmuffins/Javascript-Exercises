const palindromes = function(palindrome) {
    const noPunctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    let reversedString = '';
    let string = palindrome.toLowerCase();
    string = string.replace(noPunctuation, "");
        for (let n = 1; n <= string.length; n++) {
            //concatenate characters in reverse order, add to new variable
            reversedString += (string.charAt(string.length -n));
        }
        return (reversedString == string)  
    }
    module.exports = palindromes