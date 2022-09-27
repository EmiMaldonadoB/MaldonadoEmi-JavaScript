
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


//  Funcion Compras 

function compra () {
    producto = prompt ("Que deseas comprar? \n 1-Alcohol \n 2-Barbijo \n 3-Guantes/latex \n 4-Mascara Facial \n 5-Aromatizante \n X-Para Finalizar pedido");
    return producto;
}

let totalPedido = 0;

// Switch para sumar productos al carrito
function funCompra() {
    while (producto != "X" && producto != "x"){

        switch (producto) {
            case "1":
            alert ("Seleccionaste Alcohol $250");
            totalPedido = totalPedido + 250;
            break;
            case "2":
            alert ("Seleccionaste Barbijo $100");
            totalPedido = totalPedido + 100;
            break;
            case "3":
            alert ("Seleccionaste Guantes/latex $500");
            totalPedido = totalPedido + 500;
            break;
            case "4":
            alert ("Seleccionaste Mascara Facial $300");
            totalPedido = totalPedido + 300;
            break;
            case "5":
            alert ("Seleccionaste Aromatizante $550");
            totalPedido = totalPedido + 550;
            break;

        default:
            alert ("La opcion ingresada no es válida")
            break;
        }
        compra();
    }
    return totalPedido;
}

    compra ();
    funCompra();

    alert (`El total de tu pedido es $${totalPedido}`);

    function finalizar () {
    let terminar = prompt ("1-Desea agregar algo nuevo al pedido? \n2-Finalizar compra");

    if (terminar == 1) {
        compra ();
        funCompra();
        alert (`El total de tu pedido es $${totalPedido}`);

    } else   {
        alert ("Gracias por su compra")
    }
}

    
// compra ();
// funCompra();
finalizar();

alert (`El total de tu pedido es $${totalPedido} . GRACIAS POR SU COMPRA`);
