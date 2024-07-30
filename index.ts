let value: number = 10;

if (value > 5) {
    console.log('value is greater than 5');
}else {
    console.log('value is less than 5 or 5');
}

switch (value) {
    case 10:
        console.log('value is 10');
        break;

    default:
        console.log('value is not 10');
}

//------------------------------------------

let numbers: number[] = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));

let squares = numbers.map(num => num * num);

console.log(squares);

//------------------------------------------

