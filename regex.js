// Expresiones regulares
/*
let miRegEx = /as?.a/;
let msg = 'as?.a\n';

let cadenas = ['Java', 'casamentero', 'castaño', 'sabina', 'casualidad'];

for (i of cadenas) {
    sal = `¿Contiene ${i} el patrón ${msg} : ${miRegEx.test(i)}`
    console.log(sal);
}
*/

//Ejercicio

let miRegEx = /^[A-C]\w+\ses\s\w+/;
let msg = '(^[A-C]/w+/ses/s/w+)?:\n';

let cadena = ['Juan es guapo', 'Adriano no es feo', 'Adriano deja de ser guapo', 'Adriano ya es guapo', 'No es ahora', 'Ahora es no', 'Adriano es guapo'];
for (i of cadena) {
ej = `¿Contiene (${i}) el patrón ${msg} ${miRegEx.test(i)}`
console.log(ej);
}