var value = 10;
if (value > 5) {
    console.log('value is greater than 5');
}
else {
    console.log('value is less than 5 or 5');
}
switch (value) {
    case 10:
        console.log('value is 10');
        break;
    default:
        console.log('value is not 10');
}
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
numbers.forEach(function (num) { return console.log(num); });
var squares = numbers.map(function (num) { return num * num; });
console.log(squares);
