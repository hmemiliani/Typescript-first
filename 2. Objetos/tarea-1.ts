interface Car {
    id: number;
    marca: string;
    modelo: string;
    año: number;
};

const carro1: Car = {
    id: 1,
    marca: "Chevrolet",
    modelo: "Camaro",
    año: 2020
}

const carro2: Car = {
    id: 2,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021
}

const carro3: Car = {
    id: 3,
    marca: "Chevrolet",
    modelo: "Spark",
    año: 2019
}


console.log(`Carro 1: \nid:\t ${carro1.id}\nMarca:\t ${carro1.marca}\nModelo:\t ${carro1.modelo}\nAño:\t ${carro1.año}`);
console.log(`Carro 2: \nid:\t ${carro2.id}\nMarca:\t ${carro2.marca}\nModelo:\t ${carro2.modelo}\nAño:\t ${carro2.año}`);
console.log(`Carro 3: \nid:\t ${carro3.id}\nMarca:\t ${carro3.marca}\nModelo:\t ${carro3.modelo}\nAño:\t ${carro3.año}`);


