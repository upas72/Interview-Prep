// [1, 2, 3, 9] -> 8 -> False
// [1, 2, 4, 4] -> 8 -> True
// [3, 4, 6, 1] -> 8 -> False
// [0, 2, 9, -1] -> 8 -> True
// [1, 0, 7, 4] -> 8 -> True

const checkForSumPair = (inputArray, sum) => {
    const tempSet = new Set([]);
    let flag = false;

    inputArray.some(element => {
        if(tempSet.has(element)) {
            flag = true;
            return true;
        } else {
            tempSet.add(sum - element);
        }
    });

    return flag;
}

console.log(checkForSumPair([1, 2, 3, 9], 8));
console.log(checkForSumPair([1, 2, 4, 4], 8));
console.log(checkForSumPair([3, 4, 6, 1], 8));
console.log(checkForSumPair([0, 2, 9, -1], 8));
console.log(checkForSumPair([1, 0, 7, 4], 8));