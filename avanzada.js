/*Manejo de errores.
El manejo de errores con Javascript se realiza por medio de la declaración try…catch, el try es utilizado para definir un bloque de instrucciones que deben ser ejecutadas y en caso de que se presente algún error, se ejecutan las instrucciones definidas en el bloque catch.
*/

//Ejemplo sin error
/*
console.log("-----------------Ejemplo sin error----------------------")

try {
    //Si no hay ningun error se ejecuta el bloque try
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${suma}`);
} catch (error) {
    //Si encuentra un error ejecuta el siguiente codigo
    console.log(`Hay un error! ${error}`);
}

//Ejemplo con error

console.log("-----------------Ejemplo con error----------------------")

try {
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${resultado}`);
    //Variable resultado no definida
} catch (error) {
    console.log(`Hay un error! ${error}`);
}

console.log(`El resultado es ${resultado}`)

/*Finally: Es el bloque de código que siempre se ejecuta al finalizar el try..catch*/

console.log("-----------------Bloque finally----------------------")

try {
    console.log("En el try se agrega el codigo a evaluar")
    noExiste; //genera un error porque noExiste no esta definida
    console.log("Segundo mensaje en el try")
} catch (error) {
    console.log("Catch captura cualquier error que surga en el try")
    console.log(error) //imprime el error
} finally {
    console.log("Finally se ejecuta siempre al final de un bloque try-catch")
}

//Personalizacion de mensajes de error

console.log("-----------------Personalización mensajes de error----------------------")

try {
    let numero = 3
    if (isNaN(numero)) { //El metodo isNaN() evalua si la variable es de tipo numererico o no
        //Definición del nuevo mensaje de error  throw new Error()
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero)
} catch (error) {
    console.log(`Se produjo el siguiente ${error}`)
}



//Ejercicio 4 del taller Programación Avanzada 1
try {
    let num = 'd';
    if (isNaN(num)) {
        throw new Error(`¡Cuidado! No se reciben datos no numéricos`);
    } else {
        console.log(num);
    }
} catch (e) {
    console.log(`Hay un ${e}`);
} finally {
    console.log(`Análisis terminado`);
}


//Ejemplo sin "throw new Error"
try {
    let suma = 5 + 5;
    console.log(`La suma es ${resultado}`);
} catch (e) {
    console.log(`Hay un error --> ` + e);
}



//Ejercicio 5 del taller Programación Avanzada 1
function calculadora(op, num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2))
            throw new Error("Solo se aceptan números");
        switch (op) {
            case "suma":
                return `${num1} + ${num2} es: ` + (num1 + num2);
            case "resta":
                return `${num1} - ${num2} es: ` + (num1 - num2);
            case "mult":
                return `${num1} x ${num2} es: ` + (num1 * num2);
            case "div":
                if (num2 === 0) {
                    throw new Error("No es posible dividir por cero");
                }
                return `${num1} dividido entre ${num2} es: ` + (num1 / num2);
            case "pot":
                return `${num1} elevado a la ${num2} es: ` + Math.pow(num1, num2);
            case "rac":
                if (num1 < 0) {
                    throw new Error("No es posible calcular la raíz cuadrada de un número negativo");
                }
                return `La raíz cuadrada de ${num1} y ${num2} es: ` + `${Math.sqrt(num1)}, ${Math.sqrt(num2)}`;
            default:
                throw new Error("Operación no válida");
        }
    } catch (e) {
        console.log(e);
    }
}

console.log(calculadora("suma", 5, 4)); // 8
console.log(calculadora("resta", 5, 3)); // NaN
console.log(calculadora("mult", 3, 5));
console.log(calculadora("div", 6, 3)); // "No es posible dividir por cero"
console.log(calculadora("pot", 2, 5));
console.log(calculadora("rac", 81, 36)); // "No es posible calcular la raíz cuadrada de un número negativo"




