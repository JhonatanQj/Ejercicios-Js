//ESTRUCTURAS DE CONTROL - TALLER 2

console.log("-----------------Condicional while----------------------")

let cont = 1

//La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10

while (cont <= 10) {
    console.log(`El while va en ${cont}`)
    cont++
}


//FOR 

console.log("-----------------Condicional for----------------------")

for (let i = 0; i < 10; i++) {
    console.log(`El for va en ${i}`)
}


//NÚMEROS DEL 1 al 10

let i = 12

for (i <= 10; i >= 1; i--) {
    console.log(i);
    if (i % 2 === 0) {
      console.log(i);
    }
  }


  //SUMA DE NÚMEROS DEL 1 AL 5
  
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    sum += i;
  }
  console.log(`El resultado de la suma de 1+2+3+4+5 es: ${sum}`);


  // Tabla de multiplicar del 7

 let a = 1;
while (a <= 12) {
  console.log(`7 x ${a} = ${7*a}`);
  a++;
}

