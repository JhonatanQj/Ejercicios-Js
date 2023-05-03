/*JSON (JavaScript Object Notation).
Es básicamente una notación que es comúnmente utilizada para el intercambio de información*/

//JSON.parse(str). Convierte el JSON a un objeto y lo devuelve.

console.log("-----------Conversión de JSON a un Objeto----------------");

//JSON
const jsonUsuario = `{
  "nombre": "Mariana",
  "edad": 36
}`;

const usuario = JSON.parse(jsonUsuario); //Conversion con el método parse(JSON)
console.log(`Hola! Soy ${usuario.nombre} y tengo ${usuario.edad}`); //Impresión del objeto

console.log(typeof jsonUsuario);
console.log(typeof usuario);

console.log("-----------Conversión de un Objeto a JSON----------------");

//Objeto persona
const persona = {
  nombre: "Mariana",
  edad: 36,
  amigos: ["Juan", "Fernanda", "José"],
};

//JSON.stringify(obj). Convierte un objeto Javascript a JSON y la devuelve.
const jsonPersona = JSON.stringify(persona); //Conversión del objeto a json
console.log(jsonPersona); //Impresion del json

console.log(typeof persona);
console.log(typeof jsonPersona);

//Ejercicio 3 del Taller JSON2
const informacion = `{
    "nombre": "Mike", 
    "apellido": "Munsvil", 
    "edad": 31, 
    "hobbies": ["Correr", "Nadar", "Bailar"],
    "contacto": {
        "correo": "jh@gmail.com", 
        "telefono": {
            "tCel": 320412345678, 
            "tFijo": 9123467
        }, 
    "direccion": "Av Siempreviva"
    }
}`;

console.log(informacion);

//Ejercicio 4 del Taller JSON2

let tienda = `{"Productos": [
        {
        "Nombre": "Arroz", 
        "Marca": "Diana", 
        "Valor": {"vCompra": 2000, 
                "vVenta: 2500
        },
        "tipo": "Alimento",
        "inventario": 5
        },
    
        {
            "Nombre": "Jabón", 
            "Marca": "Ariel", 
            "Valor": {"vCompra": 1000, 
                    "vVenta: 1500
                    },
            "tipo": "Aseo",
            "inventario": 3
            },
            {
                "Nombre": "Detergente", 
                "Marca": "Suavitel", 
                "Valor": {"vCompra": 1300, 
                        "vVenta: 1800
                        },
                "tipo": "Aseo",
                "inventario": 6
                },

                {
                    "Nombre": "Gaseosa", 
                    "Marca": "Coca-Cola", 
                    "Valor": {"vCompra": 2000, 
                            "vVenta: 2500
                            },
                    "tipo": "Bebida",
                    "inventario": 10
                    },
                    
                    {
        "Nombre": "Aceite", 
        "Marca": "Gourmet", 
        "Valor": {"vCompra": 7500, 
                "vVenta: 9700
                },
        "inventario": 11
        },

        {
        "Nombre": "Galletas", 
        "Marca": "Festival", 
        "Valor": {"vCompra": 400, 
                "vVenta: 600
                },
        "tipo": "Alimento",
        "inventario": 14
        },

        {
        "Nombre": "Cerveza", 
        "Marca": "Poker", 
        "Valor": {"vCompra": 1700, 
                "vVenta: 2300
                },
        "tipo": "Bebida",
        "inventario": 25
        },

        {
        "Nombre": "Crema dental", 
        "Marca": "Colgate", 
        "Valor": {"vCompra": 1900, 
                "vVenta: 2600
                },
        "tipo": "Aseo",
        "inventario": 15
        }
]
}`

console.log(tienda);