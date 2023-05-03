let libros = {
    "books": [
        {
            "title": 2021,
            "author": "Arthur",
            "price": "30.0",
            "year": 1968
        },
        {
            "title": 1985,
            "author": "cualquiercosa",
            "price": "28.5",
            "year": 1890
        }
    ]
}


//JSON.parse --> Convierte el JSON (string) a un objeto 
let data = `{"empleados": [
    {"nombre": "Juan", "apellido": "Perez"},
    {"nombre": "Karina", "apellido": "Gonzalez"},
    {"nombre": "Luz", "apellido": "López"},
    {"nombre": "Marcos", "apellido": "Villalba"}
]
}`

let processedData = JSON.parse(data);

console.log(processedData.empleados[0]  );


//JSON.stringify ---> Convierte un objeto a JSON (string)
let _data = {
    empleados: [
        {nombre: "Juan", apellido: "Pérez"},
        {nombre: "Karina", apellido: "González"},
        {nombre: "Luz", apellido: "López"},
        {nombre: "Marcos", apellido: "Villalba"}
    ]
}

let dataJson = JSON.stringify(_data);

console.log(dataJson)