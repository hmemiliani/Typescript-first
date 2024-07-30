var arrasynumbers = [1, 2, 3, 4, 5];
var sum = arrasynumbers.reduce(function (acum, value) {
    return acum + value;
});
console.log("La suma de los elementos del array es: ".concat(sum));
