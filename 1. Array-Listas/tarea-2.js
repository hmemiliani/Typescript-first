"use strict";
function stryngsConcatenados(strings) {
    return strings.reduce((acum, value) => {
        return acum + value;
    });
}
;
const palabras = ["Hola", " ", "Riwi", "!"];
const frase = ["Hola", " ", "a", " ", "todos", " ", "esto", " ", "es", " ", "una", " ", "prueba"];
const result1 = stryngsConcatenados(palabras);
const result2 = stryngsConcatenados(frase);
console.log(result1, ' ', result2);
