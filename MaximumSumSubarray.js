/**
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * 
 * Input: nums = [1]
 * Output: 1
 * 
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumSubArray = nums => {
    if(!nums || typeof nums !== "object" || nums.length === 0) {
        return 0;
    }

    let sum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum, 0) + nums[i];
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
};

console.log(maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSumSubArray([1]));
console.log(maxSumSubArray([5,4,-1,7,8]));
console.log(maxSumSubArray([-1]));
console.log(maxSumSubArray([-1,-2,-3,5,-7]));
console.log(maxSumSubArray([-7,-2,-1,-3]));
console.log(maxSumSubArray(null));