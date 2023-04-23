class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    saludar() {
        let msj = `Hola, mi nombre es ${this.nombre}, y mi género es ${this.genero}`;
        return msj;
    }
}

const perro = new Animal("Firulais", "Macho");

console.log(perro);
console.log(perro.saludar());