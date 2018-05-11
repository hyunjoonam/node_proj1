class Strings {
    // Reverses a string.
    reverse(toReverse) {
        return toReverse.split('').reverse().join('')
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        if (toCheck === toCheck.split('').reverse().join('')) {
            return true;
        } else if (toCheck === toCheck.split('').reverse().join('') && toCheck.indexOf(' ') > 0) {
            return true;
        } else {
            return false;
        }
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
    shift(toShift) {
        let letterString = 'abcdefghijklmnopqrstuvwxyz'
        let letterSplit = letterString.split('');
        let letterArray = [];
        let inputArray = toShift.split('');
        for (let i = 0; i < length.inputArray; i++) {
            let checkIndex = letterSplit.indexOf(inputArray[i]);
            inputArray.push(inputArray[checkIndex])
            inputArray.shift();  
        }
        let joinedString = inputArray.join('');
        return joinedString
        // This code isn't working
    }

    // Checks to see if the target string is a number
    isNumber(toCheck) {
        if (isNaN(toCheck) == false) {
            return true;
        } else if (isNaN(toCheck) == true) {
            return false;
        }
        // need to write codes for $ and %
    }
}

module.exports = Strings