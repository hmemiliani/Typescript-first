function checkParameters(...params: any[]): string {
    if (params.length < 2) {
        throw new Error("Debe haber al menos dos parametros.");
    }

    const type1 = typeof params[0];
    const type2 = typeof params[1];

    if (type1 !== type2) {
        throw new Error("Los dos primeros parametros no son del mismo tipo.");
    }

    for (let i = 2; i < params.length; i++) {
        if (typeof params[i] !== type1) {
            throw new Error(`El parametro en la posicion ${i + 1} no es del mismo tipo que los dos primeros parametros.`);
        }
    }

    return "Todos los parametros son del mismo tipo.";
}


try {
    console.log(checkParameters(1, 2, 3, 4)); 
    console.log(checkParameters("a", "b", "c")); 
    console.log(checkParameters(1, 2, "3")); // Error
    console.log(checkParameters(1, "2", 3)); // Error
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Error occurred");
    }
}
