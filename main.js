let totalCarrito = 0;

class Producto {
    constructor(familia, nombre, precio) {
        this.familia = familia;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let monsteraDeliciosa = new Producto("Monstera", "Deliciosa", 3500);
let alocasiaAmazonica = new Producto("Alocasia", "Amazonica", 4300);
let monsteraVariegada = new Producto("Monstera", "Variegada", 5000);
let alocasiaMacrorrhiza = new Producto("Alocasia", "Macrorrhiza", 1800);
let monsteraAdansonii = new Producto("Monstera", "Adansonii", 2800);
let alocasiaZebrina = new Producto("Alocasia", "Zebrina", 4200);

const arrayPlantas = [monsteraDeliciosa, alocasiaAmazonica, monsteraVariegada, alocasiaMacrorrhiza, monsteraAdansonii, alocasiaZebrina];

function mostrarOpciones() {
    let opciones = "";
    arrayPlantas.forEach((producto, index) => {
        opciones += `Pulse ${index + 1} si desea comprar una ${producto.familia} ${producto.nombre} por $${producto.precio}\n`;
    });
    opciones += "Pulse 7 si desea ordenar nuestra selección por Familia de Plantas";
    return opciones;
}

function comprar() {
    let opciones = parseInt(prompt(mostrarOpciones()));

    while (opciones < 1 || opciones > 7) {
        opciones = parseInt(prompt(mostrarOpciones()));
    }

    if (opciones === 7) {
        arrayPlantas.sort((a, b) => a.familia.localeCompare(b.familia));
        comprar();
        return;
    }

    let productosFiltrados = arrayPlantas.filter(producto => producto === arrayPlantas[opciones - 1]);

    if (productosFiltrados.length > 0) {
        let productoElegido = productosFiltrados[0];
        totalCarrito += productoElegido.precio;

        let confirmacion = confirm(`Usted eligió ${productoElegido.familia} ${productoElegido.nombre} por $ ${productoElegido.precio}`);

        if (confirmacion) {
            let confirmacion2 = confirm("El producto se agregó al carrito, ¿desea comprar algo más?");
            if (confirmacion2) {
                comprar();
            } else {
                finalizarCompra();
            }
        } else {
            finalizarCompra(); 
        }
    }
}

function finalizarCompra() {
    let confirmacion3 = confirm(`El total es de ${totalCarrito}, ¿desea pagar?`);
    if (confirmacion3) {
        alert("¡Gracias por su compra!");
    } else {
        alert("Ok, nos vemos pronto!");
    }
}

comprar();
