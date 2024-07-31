function matrixRotator(matrix: number[][]):void {
    let n = matrix.length;

    for(let i=0 ; i < Math.floor(n/2); i++){
        for(let j = i; j < n-i-1; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-1-j][i];
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
            matrix[j][n-1-i] = temp;
        }
    }
}

let laMatriz1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let laMatriz2: number[][] = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
];

matrixRotator(laMatriz1);
matrixRotator(laMatriz2);


laMatriz1.forEach(fila => console.log(fila));
console.log('\n');
laMatriz2.forEach(fila => console.log(fila));