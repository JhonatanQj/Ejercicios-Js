let n1 = 34;
let n2 = 4;

function sumar(a, b) {
    return a + b;
}
let num = sumar(n1, n2);
console.log(num);

let str = saludar();
console.log(str);


//FUNCIÓN DECLARADA
function saludar() {
    msj = "Hola mundo!";
    return msj;
}
console.log(saludar());


//FUNCIÓN EXPRESADA
const saludo = function () {
    mssg = "Holi";
    return mssg;
}
console.log(saludo());



//Funcion declarada sin parametros y sin valor de retorno
function estoEsUnaFuncion() {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}
//Ivocacion de la funcion
estoEsUnaFuncion();



//Funcion declarada con parametros y valor de retorno
function saludar(nombre, edad) {
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}
console.log(saludar("Jhonatan", 27));


//Asignación de valores por defecto a una funciones
function carrera(nombre = "desconocido", carrera = "desconocido") {
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}
carrera("Jhonatan", "Desarrollo web")



//EJERCICIO: SUMA, RESTA, MULTIPLICACIÓN, DIVISIÓN
let a = 5;
let b = 3
function sum(a, b) {
    return a + b
}

function rest(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    let c;
    if (b == 0)
        c = "Error by zero"
    else
        c = a / b
    return c;
}

let op = "resta";

switch (op) {
    case "suma":
        console.log(sum(a, b))
        break;
    case "resta":
        console.log(rest(a, b))
        break;
    case "mult":
        console.log(mult(a, b))
        break;
    case "div":
        console.log(div(a, b))
        break;
    default:
        break;
}


//EJERCICIO PESOS A DÓLARES Y DÓLARES A PESOS

// Función para convertir dólares a pesos colombianos
function dolap(dolares) {
    const tasaCambio = 4489; // Tasa de cambio actual
    const pesos = dolares * tasaCambio;
    return pesos;
}

// Función para convertir pesos colombianos a dólares
function pesad(pesos) {
    const tasaCambio = 4489; // Tasa de cambio actual
    const dolares = pesos / tasaCambio;
    return dolares;
}

const dolares = 78;
const pesos = 5000;

// Convertir dólares a pesos
const resdolap = dolap(dolares);
console.log(`${dolares} dólares son ${resdolap} pesos colombianos`);

// Convertir pesos a dólares
const respesad = pesad(pesos);
console.log(`${pesos} pesos colombianos son ${respesad} dólares`);


//CALCULAR ÁREAS DE TRIÁNGULO, CUADRADO Y CIRCULO

function triangulo(a, b) {
    return (a * b) / 2;
}

function circulo(radio) {
    const PI = 3.1416;
    return PI * radio ** 2;
}

function cuadrado(a, b) {
    return a * b;
}

ladoA = 15;
ladoB = 30;
radio = 24;

console.log(`El área de un cuadrado cuyos lados miden ${ladoA} y ${ladoB} es de ${cuadrado(ladoA, ladoB)}`);
console.log(`El área de un triangulo cuya base mide ${ladoA} y su altura es ${ladoB} es de ${triangulo(ladoA, ladoB)}`)
console.log(`el área de un círculo cuyo radio mide ${radio} es de ${circulo(radio)}`);