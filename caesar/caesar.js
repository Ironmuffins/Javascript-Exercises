const caesar = function(cipher) {
    let unicodeArray = new Array();
    for (let i = 0; i < cipher.length; i++) {
        unicodeArray.push(cipher.charCodeAt(i));
   //     console.table(unicodeArray);
   }
   console.table(unicodeArray);
}
caesar('test');
//module.exports = caesar