/**
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    if(!nums || typeof nums !== "object" || nums.length === 0) {
        return false;
    }
    
    let map = new Map();
    let duplicateFlag = false;
    for(let i=0; i<nums.length; i++) {
        if(map.get(nums[i])) {
            duplicateFlag = true;
            break;
        }
        map.set(nums[i], true);
    }

    return duplicateFlag;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate(1));
console.log(containsDuplicate(null));