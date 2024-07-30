function stryngsConcatenados(strings: string[]): string {
    return strings.reduce((acum, value) => {
        return acum + value;
    });
};

const palabras: string[] = ["Hola", " ", "Riwi", "!"];
const frase: string[] = ["Hola"," ","a"," ","todos"," ","esto"," ","es"," ","una"," ","prueba"];


const result1: string = stryngsConcatenados(palabras);
const result2: string = stryngsConcatenados(frase);

console.log(result1, ' ', result2);
