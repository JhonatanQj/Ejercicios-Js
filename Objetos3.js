/*Metodos
    -Metodo estatico: Permite ser ejecutada sin necesidad de instanciar la clase
    -Metodo Setter: Permite establecer los valores de atributos de nuestra clase
    -Metodo Getter: Permite obtener los valores de los atributos de nuestra clase
*/

class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero)
        this.tamanio = tamanio;
        //Atributo raza se crea nulo para luego pedirlo con el método setter
        this.raza = null;
    }

    saludar() {
        console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`)
    }

    static queEres() { //Método estatico
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos")
    }

    //Getter. Obtiene el valor.
    get getRaza() {
        return this.raza;
    }

    //Setter. Modificador o establecedor del valor.
    set setRaza(raza) {
        this.raza = raza;
    }
}

const scooby = new Perro("Scooby Doo", "Macho", "Grande")

//Metodo estatico
Perro.queEres();

//Metodos setter y getter
scooby.setRaza = "Gran Danes"
console.log(scooby.getRaza)


// Ejercicio 4 - Taller Objetos 3
class Persona {
    constructor(nombree, apellido, edad, nacionalidad) {
        this.nombree = null,
            this.apellido = null,
            this.edad = null,
            this.nacionalidad = null
    }
    static info() {
        console.log(`Hay 8.010.259.063 personas en el mundo`);
    }
    get getNombree() {
        return this.nombree;
    }
    get getApellido() {
        return this.apellido;
    }
    get getEdad() {
        return this.getEdad;
    }
    get getNacionalidad() {
        return this.nacionalidad;
    }
    set setNombree(nombree) {
        this.nombree = nombree;
    }
    set setApellido(apellido) {
        this.apellido = apellido;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    set setNacionalidad(nacionalidad) {
        this.nacionalidad = nacionalidad;
    }
}

Persona.info();
Persona.setNombre = "Pedro"
Persona.setApellido = "Gil"
Persona.setEdad = 27
Persona.setNacionalidad = "colombiano"
console.log(Persona.setNombre);
console.log(Persona.setApellido);
console.log(Persona.setEdad);
console.log(Persona.setNacionalidad);
