"use strict";
;
class CarInfo {
    static getCarInfo(car) {
        return `Informacion del carro: \nid:\t ${car.id}\nMarca:\t ${car.marca}\nModelo:\t ${car.modelo}\nAño:\t ${car.año}`;
    }
}
const micarro1 = {
    id: 1,
    marca: "Chevrolet",
    modelo: "Camaro",
    año: 2020
};
const micarro2 = {
    id: 2,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021
};
const micarro3 = {
    id: 3,
    marca: "Chevrolet",
    modelo: "Spark",
    año: 2019
};
const carInfo1 = CarInfo.getCarInfo(micarro1);
const carInfo2 = CarInfo.getCarInfo(micarro2);
const carInfo3 = CarInfo.getCarInfo(micarro3);
console.log(`Informacion de carros: \n ${carInfo1}\n ${carInfo2}\n ${carInfo3}`);
