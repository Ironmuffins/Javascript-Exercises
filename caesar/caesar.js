const caesar = function(cipher, n) {
    //initialize variables
    let unicode = 0;
    let shiftvalue = 0;
    let recoded = '';
    let newUnicode = 0;
    for (let i = 0; i < cipher.length; i++) {
        unicode = (cipher.charCodeAt(i));
        //detect Capital letters
        if (unicode >= 65 && unicode <= 90) {
            newUnicode = (unicode + (n))
            if (newUnicode < 65) {
                shiftvalue = n + 26;
                newUnicode = (unicode + shiftvalue);
                recoded += String.fromCharCode(newUnicode);
            } else if (newUnicode > 90) {
                shiftvalue = n - 26;
                newUnicode = (unicode + shiftvalue);
                recoded += String.fromCharCode(newUnicode);
            } else {
            recoded += String.fromCharCode(newUnicode);
            }
        //detect lowercase letter
        } else if (unicode >= 97 && unicode <= 122) {
            newUnicode = (unicode + (n)) 
            if (newUnicode < 97) {
                shiftvalue = n + 26;
                newUnicode = (unicode + shiftvalue);
                recoded += String.fromCharCode(newUnicode);
            } else if (newUnicode > 122) {
                shiftvalue = n - 26;
                newUnicode = (unicode + shiftvalue);
                recoded += String.fromCharCode(newUnicode);
            } else {
            recoded += String.fromCharCode(newUnicode);
            }
        } else {
            recoded += String.fromCharCode(unicode);
        }
    }
    console.log(recoded);
    return recoded;  
}

//caesar('Hello, world!', -1);

module.exports = caesar

//A-Z 65-90 unicode Uppercase
//91-96 puncuation
//a-z 97-122 unicode lowercase
