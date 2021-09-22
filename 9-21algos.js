function nonConstructibleChange(coins) {
    coins.sort(function(a, b){return a-b})
        let totalChange = 0;
        for(let coin of coins) {
            if(coin > totalChange + 1) return totalChange + 1;
            totalChange += coin;
        }
        return totalChange + 1;
}

  // Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleCha