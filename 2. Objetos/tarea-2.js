;
var CarInfo = /** @class */ (function () {
    function CarInfo() {
    }
    CarInfo.getCarInfo = function (car) {
        return "Informacion del carro: \nid:\t ".concat(car.id, "\nMarca:\t ").concat(car.marca, "\nModelo:\t ").concat(car.modelo, "\nA\u00F1o:\t ").concat(car.año);
    };
    return CarInfo;
}());
var micarro1 = {
    id: 1,
    marca: "Chevrolet",
    modelo: "Camaro",
    año: 2020
};
var micarro2 = {
    id: 2,
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021
};
var micarro3 = {
    id: 3,
    marca: "Chevrolet",
    modelo: "Spark",
    año: 2019
};
var carInfo1 = CarInfo.getCarInfo(micarro1);
var carInfo2 = CarInfo.getCarInfo(micarro2);
var carInfo3 = CarInfo.getCarInfo(micarro3);
console.log("Informacion de carros: \n ".concat(carInfo1, "\n ").concat(carInfo2, "\n ").concat(carInfo3));
