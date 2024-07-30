interface Car {
    id: number;
    marca: string;
    modelo: string;
    año: number;
};

class CarInfo {
    static getCarInfo(car: Car): string {
        return `Informacion del carro: \nid:\t ${car.id}\nMarca:\t ${car.marca}\nModelo:\t ${car.modelo}\nAño:\t ${car.año}`
    }
}

const micarro1: Car = {
    id: 1,
    marca: "Chevrolet",
    modelo: "Camaro",
    año: 2020
}

const micarro2: Car = {
    id: 2,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021
}

const micarro3: Car = {
    id: 3,
    marca: "Chevrolet",
    modelo: "Spark",
    año: 2019
}


const carInfo1: string = CarInfo.getCarInfo(micarro1);
const carInfo2: string = CarInfo.getCarInfo(micarro2);
const carInfo3: string = CarInfo.getCarInfo(micarro3);

console.log(`Informacion de carros: \n ${carInfo1}\n ${carInfo2}\n ${carInfo3}`);
