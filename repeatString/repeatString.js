const repeatString = function(hey, n) {
    let heymessage = ''
    if (n < 0) {return 'ERROR'}
    for (let i=1; i <= n; i++) {
        heymessage += hey;
    }
    return (heymessage);
}

module.exports = repeatString
