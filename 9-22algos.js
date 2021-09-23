function isValidSubsequence(array, sequence) {
    let subPos = 0;
        for(let item of array) {
            if(subPos === sequence.length) break;
            if(sequence[subPos] === item) subPos ++;
        }
        return subPos === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;


