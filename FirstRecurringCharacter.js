/**
 * Input: str = [2,5,1,2,3,5,1,2,4]
 * Output: 2
 * 
 * Input: [2,1,1,2,3,5,1,2,4]
 * Output: 1
 * 
 * Input: [2,3,4,5]
 * Output: undefined
 */

/**
 * @param {number[]} array
 * @return {number}
 */
 const firstRecurringChar = function(array) {
    if(!array || array.length === 0) {
        return undefined;
    }

    let tempObj = {};
    for(let i = 0; i < array.length; i++) {
        if(tempObj[array[i].toString()]) {
            return array[i];
        }
        tempObj[array[i].toString()] = true;
    }
};

console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([2,3,4,5]));
console.log(firstRecurringChar(null));
