console.log("Contar del 1 al 5 utilizando un bucle while:")

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("-----------------------------------------------")


console.log("Iterar a través de un array con un bucle for:")

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("-----------------------------------------------")

console.log("Determinar la estación del año basándose en el mes:")

const mes = 12; // Cambiar el mes según sea necesario
let estacion;
function determinarEstacion(mes) {
    if (mes >= 3 && mes <= 5) {
        estacion = "Otoñ0";
    } else if (mes >= 6 && mes <= 8) {
        estacion = "Invierno";
    } else if (mes >= 9 && mes <= 11) {
        estacion = "Primavera";
    } else if (mes === 12 || mes === 1 || mes === 2) {
        estacion = "Verano";
    } else {
        estacion = "Mes no válido";
    }
    return estacion;
}


console.log(determinarEstacion(mes));

console.log("-----------------------------------------------")

console.log("Escribir un programa que muestre los números pares entre 1 y 10")

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("-----------------------------------------------")
console.log("    ")
console.log("v2-Determinar la estación del año basándose en el mes:");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function determinarEstacion(mes) {
    let estacion;
    if (mes >= 3 && mes <= 5) {
        estacion = "Otoño";
    } else if (mes >= 6 && mes <= 8) {
        estacion = "Invierno";
    } else if (mes >= 9 && mes <= 11) {
        estacion = "Primavera";
    } else if (mes === 12 || mes === 1 || mes === 2) {
        estacion = "Verano";
    } else {
        return "Mes no válido";
    }
    return estacion;
}

function preguntarMes() {
    rl.question('Por favor, ingresa un número de mes (1-12): ', (respuesta) => {
        const mes = parseInt(respuesta);

        if (isNaN(mes) || mes < 1 || mes > 12) {
            console.log("Por favor, ingresa un número válido entre 1 y 12.");
            preguntarMes();  // Volver a preguntar si el número no es válido
        } else {
            const estacion = determinarEstacion(mes);
            console.log(`La estación correspondiente es: ${estacion}`);
            console.log("-----------------------------------------------")
            rl.close();  // Cierra la interfaz si el número es válido
        }
    });
}

preguntarMes();
console.log("    ")




console.log("Función para sumar dos números")
const sumar = (a, b) => a + b;
console.log("5+3 = " + sumar(5, 3));        // Resultado: 8

console.log("Función para restar dos números")
const restar = (a, b) => a - b;
console.log("5-3 = " +restar(5, 3));       // Resultado: 2

console.log("Función para multiplicar dos números")
const multiplicar = (a, b) => a * b;
console.log("5*3 = " + multiplicar(5, 3));  // Resultado: 15

console.log("Función para dividir dos números")
const dividir = (a, b) => {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por cero";
    }
};
console.log("5/3 = " + dividir( 5, 3));      // Resultado: 1.6666666666666667
console.log("5/0 = " + dividir(5, 0));      // Resultado: "No se puede dividir por cero"

console.log("-----------------------------------------------")


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sumar = (a, b) => a + b; // Función para sumar dos números
const restar = (a, b) => a - b; // Función para restar dos números
const multiplicar = (a, b) => a * b; // Función para multiplicar dos números
const dividir = (a, b) => { // Función para dividir dos números
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por cero";
    }
};

function solicitarNumeros(callback) {
    rl.question('Por favor, ingresa el primer número: ', (respuesta1) => {
        const num1 = parseFloat(respuesta1);

        rl.question('Por favor, ingresa el segundo número: ', (respuesta2) => {
            const num2 = parseFloat(respuesta2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, ingresa números válidos.");
                solicitarNumeros(callback);  // Volver a preguntar si los números no son válidos
            } else {
                callback(num1, num2);
                rl.close();  // Cierra la interfaz después de la operación
            }
        });
    });
}

function ejecutarOperaciones(num1, num2) {
    console.log("Función para sumar dos números");
    console.log(`${num1} + ${num2} = ` + sumar(num1, num2));

    console.log("Función para restar dos números");
    console.log(`${num1} - ${num2} = ` + restar(num1, num2));

    console.log("Función para multiplicar dos números");
    console.log(`${num1} * ${num2} = ` + multiplicar(num1, num2));

    console.log("Función para dividir dos números");
    console.log(`${num1} / ${num2} = ` + dividir(num1, num2));
}

solicitarNumeros(ejecutarOperaciones); // Inicia la solicitud de números y ejecuta las operaciones
