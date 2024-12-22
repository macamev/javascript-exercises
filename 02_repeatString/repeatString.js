let word = 'hey'
const repeatString = function(word, amount) {
    if (amount < 0){
        return 'ERROR'
    }
    let newWord = ''
    for (let i = 1; i <= amount; i++) { // Corrected for loop syntax
        newWord += word
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
