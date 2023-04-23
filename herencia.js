class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar() {
        let saludo = `Hola, soy un animal y mi nombre es ${this.nombre}`;
        return saludo;
    }
}

class Gato extends Animal {
    constructor(nombre, genero, color) {
        super(nombre, genero);
        this.color = color;
        this.raza = null;
    }
    saludar() {
        let saludo = `Hola, soy un GATO y mi nombre es ${this.nombre} y mi raza es ${this.raza}`
        return saludo;
    }
    get getRaza() {
        return this.raza;
    }
    set setRaza(raza) {
        this.raza = raza;
    }
}

const canela = new Gato ("Canela", "Hembra", "Blanco")
canela.setRaza = "rara";
console.log(canela.saludar());
console.log(canela.raza);


const milla = new Gato("Milla", "Macho", "Cafecito");
console.log(milla);
console.log(milla.saludar());
milla.setRaza = "Angora turco";
console.log(milla.saludar());
console.log(milla.getRaza);
console.log(milla.raza);

