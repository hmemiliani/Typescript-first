"use strict";
const arrasynumbers = [1, 2, 3, 4, 5];
const sum = arrasynumbers.reduce((acum, value) => {
    return acum + value;
});
console.log(`La suma de los elementos del array es: ${sum}`);
