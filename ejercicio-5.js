console.log("----------------------Asignación---------------------------")
let x=12
let z=16

console.log(`El valor de x es ${x} y el valor de z es ${z}`)

x++ //Incremento en una unidad al valor de x
z-- //Decremento en una unidad al valor de z
console.log(`El valor de x incrementado es ${x} y de z con decremento es ${z}`)

let valorUno=true
let valorDos=false

//Negación: devuelve el valor contrario de una variable booleana.

console.log("Negación.", !valorDos)

//AND. Devuelve verdadero siempre y cuando las dos variables se cumplan (true).

console.log("AND.", (valorUno && valorDos))

//OR. Devuelve verdadero siempre que una variable se cumpla (true).

console.log("OR.", (valorUno || valorDos))

let a=9,
    b=56

//Se pueden declarar varias variables utilizando una sola vez la palabra reservada let o var, separandolos por comas

let suma = a+b, 
    resta=a-b,
    multiplicacion=a*b,
    division=a/b

console.log(`El valor de la suma es ${suma}
El valor de la resta es ${resta}
El valor de la multipliacion es ${multiplicacion}
El valor de la división es ${division}`)

let mayor=a>b,
    menor=a<b,
    mayorIgual=a>=b,
    menorIgual=a<=b,
    igual=a==b,
    distinto=a!=b

console.log(`La variable ${a} es mayor que ${b}: ${mayor}
La variable ${a} es menor que ${b}: ${menor}
La variable ${a} es mayor o igual que ${b}: ${mayorIgual}
La variable ${a} es menor o igual que ${b}: ${menorIgual}
La variable ${a} es igual que ${b}: ${igual}
La variable ${a} es distinta que ${b}: ${distinto}`)

let x1 = 5, y2 = 32, z3 = -12

let op1 = (x1*y2)/z3,
op2 = (y2+z3)*x1,
op3 = (x1/y2)-(x1+z3)

console.log(`El resultado de Operación 1 es: ${op1},
El resultado de la operación 2 es: ${op2},
El resultado de la operación 3 es: ${op3}`)

let modulo = a%b;
console.log(`El resultado del módulo entre ${a} y ${b} es ${modulo}`)

let incremento2 = 5
console.log(incremento2+=2)