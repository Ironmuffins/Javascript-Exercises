const caesar = function(cipher, n) {
    let unicode = 0;
    let recoded = ''
    for (let i = 0; i < cipher.length; i++) {
        unicode = (cipher.charCodeAt(i) + n);
        recoded += String.fromCharCode(unicode);
       // console.log(unicode);   
   }  
   return recoded;
}
caesar('test', 1);
module.exports = caesar