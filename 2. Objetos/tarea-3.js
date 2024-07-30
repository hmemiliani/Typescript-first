var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function yearIncrease(car) {
    return __assign(__assign({}, car), { año: car.año + 1 });
}
;
var myCar = {
    id: 8,
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2015
};
var newCar = yearIncrease(myCar);
console.log("Carro original: ".concat(myCar, " \nCarro Nuevo: ").concat(newCar)); //sale como [object Object]
console.log("Carro original: ".concat(JSON.stringify(myCar, null, 2), " \nCarro Nuevo: ").concat(JSON.stringify(newCar, null, 2))); //solucion encontrada
console.log('Carro original:', myCar);
console.log('Carro Nuevo:', newCar);
