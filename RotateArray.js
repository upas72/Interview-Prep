/**
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * 
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate = function(nums, k) {
    if(!nums || typeof nums !== "object" || nums.length === 0
        || typeof k !== "number" || k <= 0) {
        return [];
    }

    k = k % nums.length;
    let count = nums.length - k;
    for(let i=0, j=count-1; i<j; i++, j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    for(let i=count, j=nums.length-1; i<j; i++, j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    for(let i=0, j=nums.length-1; i<j; i++, j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([1,2,3,4,5,6,7], 7));
console.log(rotate([-1,-100,3,99], 2));
console.log(rotate(null));
console.log(rotate([1,2], 1));
console.log(rotate([1,2], 3));
console.log(rotate([1,2,3], 4));
console.log(rotate([2147483647,-2147483648,33,219,0], 4));
console.log(rotate([1], 1));