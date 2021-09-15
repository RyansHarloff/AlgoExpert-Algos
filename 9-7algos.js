// Two Number Sum Array
function twoNumberSum(array, targetSum) {
    let newArr = [];
        for(let i = 0; i <= array.length; i++) {
            for(let j = 0; j <= array.length; j++) {
                if(array[i] + array[j] == targetSum && array[i] != array[j]) {
                    newArr.push(array[i])
            }
        }
    }
    return newArr;
}

  // Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

// Sorted Square Array
function sortedSquaredArray(array) {
    let newArr = [];
    for(let i = 0; i <= array.length - 1; i++) {
        newArr.push(array[i]**2)
    }
    return newArr.sort(function(a,b){return a-b});
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray