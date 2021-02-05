const palindromes = function(palindrome) {
    let reversedString = '';
        for (let n = 1; n <= palindrome.length; n++) {
            //concatenate characters in reverse order, add to new variable
            reversedString += (palindrome.charAt(palindrome.length -n));
            //console.log(reversedString);
        }
        if (reversedString == palindrome) {
            return true;
        }
        else {
            return false;
        }
    }

module.exports = palindromes