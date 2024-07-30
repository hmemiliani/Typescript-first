interface Car {
    id: number;
    marca: string;
    modelo: string;
    año: number;
}

function yearIncrease(car:Car): Car {
    return {
        ...car,
        año: car.año + 1
    };
};

const myCar: Car = {
    id: 8,
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2015
};

const newCar: Car = yearIncrease(myCar);

console.log(`Carro original: ${myCar} \nCarro Nuevo: ${newCar}`);//hay un errorm, sale como [object Object]
console.log(`Carro original: ${JSON.stringify(myCar, null, 2)} \nCarro Nuevo: ${JSON.stringify(newCar, null, 2)}`); //solucion encontrada

console.log('Carro original:', myCar);
console.log('Carro Nuevo:', newCar);
