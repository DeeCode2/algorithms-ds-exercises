var sortedSquares = function(nums) {
    
    let result = [];
    let head = 0;
    let tail = nums.length - 1
    let index = nums.length-1;
    
    while (head <= tail) {
        if (nums[head]**2 < nums[tail]**2) {
            result[index] = nums[tail]**2;
            index--
            tail--
        } else {
            result[index] = nums[head]**2;
            index--
            head++
        }
    }
    
    return result
};
