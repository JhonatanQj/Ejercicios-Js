console.log("ESTRUCTURAS DE CONTROL");
console.log("------------------------if/else---------------------------")

let edad = 26;

if (edad >= 18) { //Inicio de la condicion
    console.log("Eres mayor de edad, preparate :(") //Instruccion si se cumple
} else {
    console.log("Eres menor de edad, disfruta tu vida :)") //Instruccion si no se cumple.
}


console.log("-----------------Condicional anidada----------------------")

let hora = 23

/*Devuelve un saludo dependiendo la hora:
    -De 00 a las 11: Buenos días!
    -De 12 a las 18: Buenas tardes!
    -De 19 a las 23: Buenas noches!*/

if (hora >= 0 && hora <= 5) { //Primera condición
    console.log("Dejen dormir!")
} else if (hora >= 6 && hora <= 11) { //Segunda condición
    console.log("Buenos días!")
} else if (hora >= 12 && hora <= 18) { //Tercera condición
    console.log("Buenas tardes!")
} else if (hora >= 19 && hora <= 23) {
    console.log("Buenas noches!")
} else {
    console.log("Hora inválida");
}//Instruccion si no se cumple ninguna condición


console.log("-----------------Operador ternario----------------------")

let a = 1,
    b = 3

let esMayor = (a > b) ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`
console.log(esMayor)


console.log("-----------------switch/case----------------------")

let dia = 6

switch (dia) {
    case 0:
        console.log("El día es domingo")
        break;
    case 1:
        console.log("El día es lunes")
        break;
    case 2:
        console.log("El día es martes")
        break;
    case 3:
        console.log("El día es miercoles")
        break;
    case 4:
        console.log("El día es jueves")
        break;
    case 5:
        console.log("El día es viernes")
        break;
    case 6:
        console.log("El día es sabado")
        break;

    default:
        console.log("el día no existe")
        break;
}


//EJERCICIOS EN CLASE
//NÚMERO MAYOR, MEDIO Y MENOR


let x = 36,
    y = 2,
    z = 19

mayor = x > y ? (x > z ? x : z) : (y > z ? y : z);
menor = x < y ? (x < z ? x : z) : (y < z ? y : z);
medio = (x+y+z) - mayor - menor

console.log(`El número mayor ${mayor}, el del medio es ${medio} y el menor es ${menor}`);



//NÚMEROS PARES E IMPARES
let num = 3;

if (num %2 == 0){
    console.log("Es un número par");
} else {
   console.log("Es un número impar"); 
}


//PLANTEAMIENTO DOCENAS

    let cantidadDocenas = 9
    let valorDocena = 60000;
    let valorCompra = valorDocena * cantidadDocenas;
    let descuento = 0;
  
    if (cantidadDocenas >= 10) {
      descuento = valorCompra * 0.2;
    } else if (cantidadDocenas >= 5) {
      descuento = valorCompra * 0.15;
    } else if (cantidadDocenas >= 1) {
      descuento = valorCompra * 0.1;
    }
  
    let valorFinal = valorCompra - descuento;
  
    console.log(`Cantidad de decenas: ${cantidadDocenas}`);
    console.log(`Valor de cada docena: $${valorDocena}`);
    console.log(`Valor de la compra: $${valorCompra}`);
    console.log(`Descuento aplicado: $${descuento}`);
    console.log(`Valor final de la compra: $${valorFinal}`);
  

 