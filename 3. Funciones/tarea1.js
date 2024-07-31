"use strict";
function findMax(numbers) {
    return Math.max(...numbers);
}
;
const nums = [4, 3, 2, 5, 3, 6, 7, 9, 5, 4];
const maxValue = findMax(nums);
console.log(`El mayor valor es: ${maxValue}`);
