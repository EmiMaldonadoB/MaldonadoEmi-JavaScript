
// DECLARO LAS VARIABLES

const contenidoCompras = document.getElementById("contenidoCompras");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

// UTILIZO JSON.parse para traer lo que tenia seleccionado en mi carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

   // CONSUMO JSON LOCAL PARA EL MENU DE PRODUCTOS
    fetch('./JSON/menu.json')
    .then( res => res.json() )
    .then( productos => {

                // UTILIZO UN FOREACH PARA RECORRER EL ARRAY DE PRODUCTOS 
        productos.forEach((product) => {
            let content = document.createElement("div");
            content.className = "card";
            content.innerHTML = `
                <h3 class= "nombreProducto"> ${product.nombre} </h3>
                <p class= "precioProducto"> Precio $ ${product.precio}  </p>
                <img class= "imgProducto" src=" ${product.imgSrc}">
            `;
        
            contenidoCompras.append(content);
        

            // Boton para agregar producto al carrito
            let comprar = document.createElement("button");
            comprar.innerText = "Agregar al Carrito";
            comprar.className = "comprar";
        
            content.append(comprar);
            

        
            // Funcion para agregar productos al carrito
            comprar.addEventListener("click", () => {
                // repeatId es para que no se dupliquen los productos en el modal
                const repeatId = carrito.some((repeatProduct) => repeatProduct.id === product.id);
                if (repeatId) {
                    carrito.map((prod) => {
                        if (prod.id === product.id){
                            prod.cantidad++;
                        }
                    })
                } else {
        
                carrito.push({
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    imgSrc: product.imgSrc,
                    cantidad: product.cantidad,  
                });
                
                saveLocal ();
                carritoCounter();
               
            }
            })
        
        });
    });






// LocalStorage: lo utilizo para guardar lo agregado al carrito, en caso de cerrar la pagina por error, no se pierde lo agregado
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify (carrito));
};

saveLocal ();



