//Ejercicios Arrays
// 1-Crear un array de números
let num = [1, 2, 3, 4, 5];
console.log(num);
// 2-Agregar un nuevo número al final del array
num.push(6);
console.log(num);
// 3-Quitar el último número del array
num.pop();
console.log(num);
// 4-Imprimir en la consola el array resultante después de agregar y quitar elementos
console.log(num);

//Ejercicios Objetos
//1-Crear un objeto persona con propiedades como nombre, edad y ocupación:
let persona = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "Ingeniero"
};

//2- Acceder a la propiedad nombre del objeto persona:
let nombrePersona = persona.nombre;

//3- Imprimir en la consola el nombre de la persona:
console.log(nombrePersona);  


//Ejercicios Funciones (convertir a arrow functions):
//1- Crear una función normal que sume dos números:
function sumar(a, b) {
    return a + b;
}
//2- Convertir esa función a una arrow function:
const sumar = (a, b) => a + b;

//3- Llamar a la función con dos números y mostrar el resultado:
let resultado = sumar(5, 3);
console.log(resultado);  


// Ejercicios Métodos de Array:
//1- Crear un array de números:
let numeros = [1, 2, 3, 4, 5, 6];

//2- Usar el método find para encontrar el primer número mayor que 3:
let numeroMayorQueTres = numeros.find(num => num > 3);
console.log(numeroMayorQueTres); 

//3- Usar el método filter para obtener todos los números mayores que 2:
let numerosMayoresQueDos = numeros.filter(num => num > 2);
console.log(numerosMayoresQueDos);  

//4- Usar el método map para duplicar cada número en el array:
let numerosDuplicados = numeros.map(num => num * 2);
console.log(numerosDuplicados);   