const palindromes = function(palindrome) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let reversedString = '';
    let string = palindrome.toLowerCase();
    string = string.replace(regex, "");
        for (let n = 1; n <= string.length; n++) {
            //concatenate characters in reverse order, add to new variable
            reversedString += (string.charAt(string.length -n));
            reversedString.toLowerCase();
            console.log(string);
            console.log(reversedString);
            
        }
        if (reversedString == string) {
            return true;
        }
        else {
            return false;
        }
    }

module.exports = palindromes
