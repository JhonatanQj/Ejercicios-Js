const persona = {
    nombre: "Jhonatan",
    apellido: "Quevedo",
    edad: "NA",
    hablar: function () {
        msj = `Hola! Mi nombre es ${this.nombre}`;
        return msj;
    }
}
console.log(persona.hablar());
console.log(persona.nombre);


class Fruta { } // Declaración de una clase vacía

const Manzana = new Fruta(); //Se crea una instancia de un objeto basado en la clase
console.log(typeof (Manzana))


// GUÍA OBJETOS 1 