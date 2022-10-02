/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const complMap = new Map();
    let result = -1;

    if(!nums || typeof nums !== "object") {
        return -1;
    }

    nums.some((ele, index) => {
        if(typeof complMap.get(ele) === "number") {
            result = [complMap.get(ele), index];
            return true;
        } else {
            complMap.set((target - ele), index);
        }
    });

    return result;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([1], 1));
console.log(twoSum([1,2,3,4], 10));
console.log(twoSum(null));