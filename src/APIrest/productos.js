const camisetas = [{"Nombre": "Camiseta Titular Boca Juniors 2022","Club": "Boca", "Precio": 10000, "Seleccionado": true, "link": "../assets/camisetaBoca1.png","club": "Boca","id": 0, "carrito":0, "descripcion": "La camiseta titular del club mas grande del país"},
{"Nombre": "Camiseta Suplente Boca Juniors 2022","Club": "Boca", "Precio":12000 , "Seleccionado": false, "link": "../assets/camisetaBoca2.png","club": "Boca","id": 1, "carrito":0, "descripcion": "La camiseta suplente del club mas grande del país"},
{"Nombre": "Camiseta Arquero Boca Juniors 2022" ,"Club": "Boca", "Precio": 12000, "Seleccionado": false, "link": "../assets/camisetaBocaArquero.png","club": "Boca","id": 2, "carrito":0, "descripcion": "La camiseta de arquero del club mas grande del país"},
{"Nombre": "Camiseta Titular River Plate 2022","Club": "River", "Precio": 10000, "Seleccionado": true, "link": "../assets/camisetaRiver1.png","club": "River","id": 3, "carrito":0, "descripcion": "La camiseta titular del 3er club mas grande del país"},
{"Nombre": "Camiseta Suplente River Plate 2022","Club": "River", "Precio": 12000, "Seleccionado": true, "link": "../assets/camisetaRiver2.png","club": "River","id": 4, "carrito":0, "descripcion": "La camiseta suplente del 3er club mas grande del país"},
{"Nombre": "Camiseta Arquero River Plate 2022" ,"Club": "River", "Precio": 14000, "Seleccionado": false, "link": "../assets/camisetaRiverArquero.png","club": "River","id": 5, "carrito":0, "descripcion": "La camiseta de arquero del 3er club mas grande del país"},
{"Nombre": "Camiseta Alternativa River Plate 2022" ,"Club": "River", "Precio": 15000, "Seleccionado": false, "link": "../assets/camisetaRiver3.png","club": "River","id": 6, "carrito":0,"descripcion": "La camiseta alternativa del 3er club mas grande del país"}

]
const getObjectByID = (ID) =>{
    return camisetas[ID];
}
export default camisetas