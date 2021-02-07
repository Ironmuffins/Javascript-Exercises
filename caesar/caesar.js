const caesar = function(cipher, n) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    let unicode = 0;
    let recoded = ''
    for (let i = 0; i < cipher.length; i++) {
        if (regex.test(cipher.charAt(i))) {
            recoded += cipher.charAt(i);
 //           console.log(unicode);
 //           console.log(recoded);
           }
        else {
            unicode = (cipher.charCodeAt(i) + (n));
            recoded += String.fromCharCode(unicode);
 //           console.log(unicode);
//            console.log(recoded);
            }
    }  
 //   console.log(unicode);
//    console.log(recoded);
    return recoded;
}
//caesar(',te st!', 1);
module.exports = caesar