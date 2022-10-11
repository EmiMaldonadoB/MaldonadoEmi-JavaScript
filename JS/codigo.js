
// Login


function login () {
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {
        let nombre= prompt ("Ingresa tu usuario. Te quedan " + (i +1) + " intentos."
        );
            if (nombre != " ") {
                alert ("Bienvenido/a " + nombre);
                ingresar = true;
                break;
            } else {
                alert("Error de usuario");
                }
    }
}
login();


//  Declaro array objetos 

const productos = [
    {nombre: "Alcohol", precio: 100},
    {nombre: "Barbijo", precio: 200},
    {nombre: "Guantes", precio: 150},
    {nombre: "Mascara Facial", precio: 300},
    {nombre: "Aromatizantes", precio: 250},
]

// Declaro array de carrito
let carrito = []

let seleccion = prompt("Deseas comprar un producto? Si / No")

if(seleccion != "No"){
    alert("Esta es nuestra lista de Productos")
    let todosProductos = productos.map((productos) => productos.nombre + " $" + productos.precio)
    alert(todosProductos.join(" \n"))
}   else  {
    alert("Muchas gracias por su visita")
}

while (seleccion != "No"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0


if (producto == "Alcohol" || producto == "Barbijo" || producto == "Guantes" || producto == "Mascara Facial" || producto == "Aromatizantes") {
        switch(producto) {
            case "Alcohol":
                precio = 100;
                break;
            case "Barbijo":
                precio = 200;
                break;
            case "Guantes":
                precio = 150;
                break;
            case "Mascara Facial":
                precio = 300;
                break;
            case "Aromatizantes":
                precio = 250;
                break;
            default:
                break;
        }

    let unidades = parseInt(prompt("Cuantas unidades deseas?"))
    carrito.push({producto, unidades, precio})
    } else {
        alert("El producto ingresado no existe")
    }

    seleccion = prompt("Desea agregar algo mas? Si / No")

    while (seleccion == "No") {
        alert("Gracias Por Su Compra");
        carrito.forEach((carritoTotal) => {
            console.log(`Producto: ${carritoTotal.producto}, Unidades: ${carritoTotal.unidades}, Total a pagar por producto: ${carritoTotal.unidades * carritoTotal.precio}`);
        })
        break;
    }
}


const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total de su compra es: ${total} ` )

