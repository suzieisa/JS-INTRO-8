// Run this code in debug mode

function findLargestNumber(nums) {
    let largest = 0;
    for(let i = 0; i <= nums.length; i++) {
        const num = nums[i];
       // debugger;
        if(num > largest) {
            largest = num;
        }
    }
    return largest;
}

const numbers = [8, 9, 1, 0, 42, 4 ]; // number [5] = 4, numbers[6] = undefines
console.log(findLargestNumber(numbers)); // 42
console.log(findLargestNumber([8, 9, 1, 0])); // 9
console.log(findLargestNumber([1, 0, 4])); // 4

/*
Either use debuggers;
or set breakpoint from 