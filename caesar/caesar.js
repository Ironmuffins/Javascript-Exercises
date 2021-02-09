const caesar = function(word, n) {
    //initialize variables
    let unicode = 0;
    let recoded = '';
    let newUnicode = 0;
    for (let i = 0; i < word.length; i++) {
        unicode = (word.charCodeAt(i));
        //capital letters
        if (unicode >= 65 && unicode <= 90) {
            newUnicode = (unicode + (n))
            if (newUnicode < 65) {
                while (newUnicode < 65){
                    newUnicode += 26;
                    }
                recoded += String.fromCharCode(newUnicode);
            } else if (newUnicode > 90) {
                while (newUnicode > 90){
                    newUnicode += -26;
                    }
                recoded += String.fromCharCode(newUnicode);
            } else {
            recoded += String.fromCharCode(newUnicode);
            }
        //lowercase letters
        } else if (unicode >= 97 && unicode <= 122) {
            newUnicode = (unicode + (n)) 
            if (newUnicode < 97) {
                while (newUnicode < 97){
                    newUnicode += 26;
                    }
                recoded += String.fromCharCode(newUnicode);
            } else if (newUnicode > 122) {
                while (newUnicode > 122){
                    newUnicode += -26;
                }
                recoded += String.fromCharCode(newUnicode);
            } else {
            recoded += String.fromCharCode(newUnicode);
            }
        //returns all non-letter characters such as punctuation
        } else { 
            recoded += String.fromCharCode(unicode);
        }
    }
    return recoded;  
}
module.exports = caesar

//ACSII values:
//65-90 Uppercase Letters
//91-96 Puncuation
//97-122 Lowercase Letters