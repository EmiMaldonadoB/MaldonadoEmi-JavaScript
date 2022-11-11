
    const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    

    
    // Cree el header del modal(carrito)
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML = `
        <h1 class="modalHeaderTitulo"> Carrito </h1>
    `;

    modalContainer.append(modalHeader);

    

   

    
     // Cree boton para limpiar el carrito 
     function limpiarCarrito () {
        const cleanCarrito = document.createElement("span");
        cleanCarrito.innerHTML = '<span class="cleanCarritoBotom" > Limpiar Carrito </span>';
        cleanCarrito.className = "cleanCarritoBotom";
        
        cleanCarrito.addEventListener("click", () => {
            carrito = [];
            pintarCarrito();
        } );
        
        modalHeader.append(cleanCarrito);
        
        };

    

    

      
    carrito.forEach((product) => {
        let carritocontent = document.createElement("div");
        carritocontent.className = "modalContent"
        carritocontent.innerHTML = `
            
            <img src="${product.imgSrc}">
            <h3 class="nombreProductos"> ${product.nombre} </h3>
            <p class="precioProducto"> ${product.precio} $ </p>
            <span class="restar"> - </span>
            <p> Cantidad: ${product.cantidad} </p>
            <span class="sumar"> + </span>
            <p> Total: ${product.cantidad * product.precio} </p>
            
        `;
        modalContainer.append(carritocontent);

       

        // Variables para modificar cantidad de productos seleccionados en el carrito
        let restar = carritocontent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {
            product.cantidad--;
            }
            pintarCarrito();
            saveLocal ();
        })

        let sumar = carritocontent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            product.cantidad++;
            pintarCarrito();
            saveLocal ();
        })

        // Cree boton eliminar para, eliminar productos del carrito
        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "eliminarProducto";
        carritocontent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
        
    });


    // CREO LA VARIABLE TOTAL PARA ACUMULAR EL TOTAL DEL CARRITO
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement ("div")
    totalCompra.className = "totalContent"
    totalCompra.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalCompra);
    
    
    carritoCounter();
    saveLocal ();
    limpiarCarrito ();

     // Cree boton para cerrar el modal(carrito)
     const modalBoton = document.createElement("h1");
     modalBoton.innerText = "x";
     modalBoton.className = "modalHeaderBoton";
 
     modalBoton.addEventListener("click", () => {
         modalContainer.style.display = "none";
     });
     
     modalHeader.append(modalBoton);


    const finalizarCompra = document.createElement("span");
    finCompra.innerText = "Ir a Pagar";
    finCompra.className = "finalizarCompra";

    finCompra.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    
    // Cierro Funcion pintarCarrito
};





verCarrito.addEventListener("click", pintarCarrito);

    // Funcion para eliminar producto del carrito
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    pintarCarrito();
    carritoCounter();
    
};
    // funcion para llevar un contador de prodcutos en el carrito y verlo desde el index
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
    console.log(carrito.length);
};






