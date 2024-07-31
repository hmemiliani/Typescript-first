function findMax(numbers: number[]): number {
    return Math.max(...numbers);
};

const nums: number[] = [4,3,2,5,3,6,7,9,5,4];

const maxValue: number = findMax(nums);

console.log(`El mayor valor es: ${maxValue}`);