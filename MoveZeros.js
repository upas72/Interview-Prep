/**
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */

/**
 * @param {number[]} nums
 * @return {void}
 */
const moveZeroes = nums => {
    if(!nums || typeof nums !== "object" || nums.length === 0) {
        return;
    }

    let index = 0;
    for(let i=0; i<nums.length; i++) {
        if (nums[i] !== 0){
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }
    console.log(nums);
};

moveZeroes([0,1,0,3,12]);
moveZeroes(null);
moveZeroes([1]);
moveZeroes([0,0,0,1,2,3]);
moveZeroes([1,2,3,0,0,0]);
moveZeroes([1,0,0,0,2,3]);