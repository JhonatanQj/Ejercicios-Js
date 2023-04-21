/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a = Array(9).fill(true)
console.log(a)

const colores = ["Rojo", "Azul", "Gris"]
console.log(colores)

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------")
const copiaColores = colores.slice();
console.log(copiaColores)

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------")
console.log(colores.length)


//Ejercicio 4 de la guía de Arreglos 2

const num = [];
for (let i = 0; i < 100; i++) {
    num.push(i + 1);
}
console.log(num);

//Ejercicio 5 de la guía de arreglos 2
for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        num.push(i);
    }
}
console.log(num);



// Ejercicio 6 de la guía de Arreglos 2
let numeros = [3, 5, 2]; // arreglo de ejemplo con 3 números
numeros.sort(); // ordena los números de menor a mayor
console.log(numeros); // imprime en pantalla los números ordenados