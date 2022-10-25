
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

    // Cree boton para cerrar el modal(carrito)
    const modalBoton = document.createElement("h1");
    modalBoton.innerText = "x";
    modalBoton.className = "modalHeaderBoton";

    modalBoton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    
    modalHeader.append(modalBoton);

    
    carrito.forEach((product) => {
        let carritocontent = document.createElement("div");
        carritocontent.className = "modalContent"
        carritocontent.innerHTML = `
            
            <img src="${product.imgSrc}">
            <h3 class="nombreProductos"> ${product.nombre} </h3>
            <p class="precioProducto"> ${product.precio} $ </p>
            <p> Cantidad: ${product.cantidad} </p>
            <p> Total: ${product.cantidad * product.precio} </p>
            
        `;
        modalContainer.append(carritocontent);

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
}

