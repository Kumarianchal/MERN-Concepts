// math.js - a CommonJS module for performing calculations on a set of numbers

function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

function mean(nums) {
    return sum(nums) / nums.length;
}

const func = () =>{
    return 1;
}
export {func};

// module.exports = {
//     sum : sum,
//     mean : mean
// }