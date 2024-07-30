function stryngsConcatenados(strings) {
    return strings.reduce(function (acum, value) {
        return acum + value;
    });
}
;
var palabras = ["Hola", " ", "Riwi", "!"];
var frase = ["Hola", " ", "a", " ", "todos", " ", "esto", " ", "es", " ", "una", " ", "prueba"];
var result1 = stryngsConcatenados(palabras);
var result2 = stryngsConcatenados(frase);
console.log(result1, ' ', result2);
