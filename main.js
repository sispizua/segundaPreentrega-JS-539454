let totalCarrito = 0

class Producto{
    constructor(familia, nombre, precio){ 
    this.familia = familia
    this.nombre = nombre
    this.precio = precio
}
}

let monsteraDeliciosa = new Producto("Monstera", "Deliciosa", 3500)
let alocasiaAmazonica = new Producto("Alocasia", "Amazonica", 4300)
let monsteraVariegada = new Producto("Monstera", "Variegada", 5000)
let alocasiaMacrorrhiza = new Producto("Alocasia", "Macrorrhiza", 1800)
let monsteraAdansonii = new Producto("Monstera", "Adansonii", 2800)
let alocasiaZebrina = new Producto("Alocasia", "Zebrina", 4200)

const arrayPlantas = [monsteraDeliciosa, alocasiaAmazonica, monsteraVariegada, alocasiaMacrorrhiza, monsteraAdansonii, alocasiaZebrina]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea comprar una ${arrayPlantas[0].familia} ${arrayPlantas[0].nombre} por $${arrayPlantas[0].precio}\n Pulse 2 si desea comprar una ${arrayPlantas[1].familia} ${arrayPlantas[1].nombre} por $${arrayPlantas[1].precio}\n Pulse 3 si desea comprar una ${arrayPlantas[2].familia} ${arrayPlantas[2].nombre} por $${arrayPlantas[2].precio}\n Pulse 4 si desea comprar una ${arrayPlantas[3].familia} ${arrayPlantas[3].nombre} por $${arrayPlantas[3].precio}\n Pulse 5 si desea comprar una ${arrayPlantas[4].familia} ${arrayPlantas[4].nombre} por $${arrayPlantas[4].precio}\n Pulse 6 si desea comprar una ${arrayPlantas[5].familia} ${arrayPlantas[5].nombre} por $${arrayPlantas[5].precio}\n Pulse 7 si desea ordenar nuestra seleción por Familia de Plantas`))

    while (opciones < 1 || opciones > 7){
        opciones = parseInt(prompt(`Pulse 1 si desea comprar una ${arrayPlantas[0].familia} ${arrayPlantas[0].nombre} por $${arrayPlantas[0].precio}\n Pulse 2 si desea comprar una ${arrayPlantas[1].familia} ${arrayPlantas[1].nombre} por $${arrayPlantas[1].precio}\n Pulse 3 si desea comprar una ${arrayPlantas[2].familia} ${arrayPlantas[2].nombre} por $${arrayPlantas[2].precio}\n Pulse 4 si desea comprar una ${arrayPlantas[3].familia} ${arrayPlantas[3].nombre} por $${arrayPlantas[3].precio}\n Pulse 5 si desea comprar una ${arrayPlantas[4].familia} ${arrayPlantas[4].nombre} por $${arrayPlantas[4].precio}\n Pulse 6 si desea comprar una ${arrayPlantas[5].familia} ${arrayPlantas[5].nombre} por $${arrayPlantas[5].precio}\n Pulse 7 si desea ordenar nuestra seleción por Familia de Plantas`))    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayPlantas [0]
        totalCarrito += arrayPlantas[0].precio
    }
    else if (opciones == 2){
        productoElegido = arrayPlantas [1]
        totalCarrito += arrayPlantas[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayPlantas [2]
        totalCarrito += arrayPlantas[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayPlantas [3]
        totalCarrito += arrayPlantas[3].precio
    }
    else if (opciones == 5){
        productoElegido = arrayPlantas [4]
        totalCarrito += arrayPlantas[4].precio
    }
    else if (opciones == 6){
        productoElegido = arrayPlantas [5]
        totalCarrito += arrayPlantas[5].precio
    }
    else if (opciones == 7){
        const compararPorFamilia = (a, b) => {
            if (a.familia < b.familia) {
                return -1;
            }
            if (a.familia > b.familia) {
                return 1;
            }
            return 0;
        };
        arrayPlantas.sort(compararPorFamilia);
        opciones = parseInt(prompt(`Pulse 1 si desea comprar una ${arrayPlantas[0].familia} ${arrayPlantas[0].nombre} por $${arrayPlantas[0].precio}\n Pulse 2 si desea comprar una ${arrayPlantas[1].familia} ${arrayPlantas[1].nombre} por $${arrayPlantas[1].precio}\n Pulse 3 si desea comprar una ${arrayPlantas[2].familia} ${arrayPlantas[2].nombre} por $${arrayPlantas[2].precio}\n Pulse 4 si desea comprar una ${arrayPlantas[3].familia} ${arrayPlantas[3].nombre} por $${arrayPlantas[3].precio}\n Pulse 5 si desea comprar una ${arrayPlantas[4].familia} ${arrayPlantas[4].nombre} por $${arrayPlantas[4].precio}\n Pulse 6 si desea comprar una ${arrayPlantas[5].familia} ${arrayPlantas[5].nombre} por $${arrayPlantas[5].precio}`))
        while (opciones < 1 || opciones > 7){
            opciones = parseInt(prompt(`Pulse 1 si desea comprar una ${arrayPlantas[0].familia} ${arrayPlantas[0].nombre} por $${arrayPlantas[0].precio}\n Pulse 2 si desea comprar una ${arrayPlantas[1].familia} ${arrayPlantas[1].nombre} por $${arrayPlantas[1].precio}\n Pulse 3 si desea comprar una ${arrayPlantas[2].familia} ${arrayPlantas[2].nombre} por $${arrayPlantas[2].precio}\n Pulse 4 si desea comprar una ${arrayPlantas[3].familia} ${arrayPlantas[3].nombre} por $${arrayPlantas[3].precio}\n Pulse 5 si desea comprar una ${arrayPlantas[4].familia} ${arrayPlantas[4].nombre} por $${arrayPlantas[4].precio}\n Pulse 6 si desea comprar una ${arrayPlantas[5].familia} ${arrayPlantas[5].nombre} por $${arrayPlantas[5].precio}`))
        }
if (opciones == 1){
    productoElegido = arrayPlantas [0]
    totalCarrito += arrayPlantas[0].precio
}
else if (opciones == 2){
    productoElegido = arrayPlantas [1]
    totalCarrito += arrayPlantas[1].precio
}
else if (opciones == 3){
    productoElegido = arrayPlantas [2]
    totalCarrito += arrayPlantas[2].precio
}
else if (opciones == 4){
    productoElegido = arrayPlantas [3]
    totalCarrito += arrayPlantas[3].precio
}
else if (opciones == 5){
    productoElegido = arrayPlantas [4]
    totalCarrito += arrayPlantas[4].precio
}
else if (opciones == 6){
    productoElegido = arrayPlantas [5]
    totalCarrito += arrayPlantas[5].precio
}
}
    let confirmacion = confirm(`Usted eligio ${productoElegido.familia} ${productoElegido.nombre} por $ ${productoElegido.precio}, desea agragar algo mas al carrito?`) 
    if (confirmacion == true){
        let confirmacion2  = confirm("El producto se agrego al carrito, desea comprar algo mas?")
        if (confirmacion2 == true){
            comprar()
        } else {
            let confirmacion3 = confirm(`El total es de ${totalCarrito}, desea pagar?`)
            if (confirmacion3 == true){
                alert ("Gracias por su compra!")
            } else {
                alert ("Ok, nos vemos pronto!")
            }
        }
    } else {
        let confirmacion4 = confirm("Va a seguir comprando?")
        if(confirmacion4 == true){
            comprar()
        } else {
            alert ("ok, nos vemos pronto!")
        }
    }
}
comprar ()


/*
const compararPorFamilia = (a, b) => {
    if (a.familia < b.familia) {
        return -1;
    }
    if (a.familia > b.familia) {
        return 1;
    }
    return 0;
};

arrayPlantas.sort(compararPorFamilia);

console.log(arrayPlantas);
*/