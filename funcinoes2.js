console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function () {
    return console.log("Esta es una función expresada!");
}

funcionExpresada();


console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");

(function () {
    console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (c) {
    c.log("Mi segunda funcion anonima autoejecutable (IIFE) con parametros");
})(console);

(function (x, y, z) {
    console.log(x + y + z);
})(1, 2, 3);


//Ejercicio 4 guía - Funciones 2 - Función expresada
const resul = function (a, b) {
    if (a > b) {
        return "1";
    }
    else if (a < b) {
        return "-1";
    }
    else {
        return "0";
    }
}
console.log(resul(3, 5));


//Ejercicio 5 guía - Funciones 2 - Función anónima autoejecutada

(function (n) {
    if (n >= 0 && n % 2 === 0) {
        console.log(n + " es un número par")
    }
    else if (n > 0 && n % 2 === 1) {
        console.log(n + " es un número impar")
    }
    else {
        console.log("Introduzca un número positivo")
    }
})(3)


//Variables diferentes o iguales tanto en valor como en tipo

var1 = 1;
var2 = 1;
var3 = "1";

if (var1 === var3){
    console.log("son iguales");
}
else {
    console.log("son diferentes");
}