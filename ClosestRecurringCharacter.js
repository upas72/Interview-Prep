/**
 * Input: str = [2,5,1,2,3,5,1,2,4]
 * Output: 2
 * 
 * Input: [2,5,2,1,1,2,3,5,1,2,4]
 * Output: 1
 * 
 * Input: [2,3,4,5]
 * Output: undefined
 */

/**
 * @param {number[]} array
 * @return {number}
 */
 const closestRecurringChar = function(array) {
    if(!array || array.length === 0) {
        return undefined;
    }

    let minDifference = array.length;
    let recurrNo = undefined;
    let tempObj = {};
    for(let i = 0; i < array.length; i++) {
        if(tempObj[array[i].toString()] !== undefined) {
            if(i - tempObj[array[i].toString()] < minDifference) {
                recurrNo = array[i];
                minDifference = i - tempObj[array[i].toString()];
            }
        }
        tempObj[array[i].toString()] = i;
    }
    return recurrNo;
};

console.log(closestRecurringChar([2,5,1,2,3,5,1,2,4]));
console.log(closestRecurringChar([2,5,2,1,1,2,3,5,1,2,4]));
console.log(closestRecurringChar([2,3,4,5]));
console.log(closestRecurringChar([1,3,4,1]));
console.log(closestRecurringChar(null));
