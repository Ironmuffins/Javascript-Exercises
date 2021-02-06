const caesar = function(cipher) {
    let unicodeArray = 0;
    for (let i = 0; i < cipher.length; i++) {
        unicodeArray = (cipher.charCodeAt(i));
        console.log(unicodeArray);
        console.log(String.fromCharCode(unicodeArray))
   }  
}
caesar('test');
//module.exports = caesar