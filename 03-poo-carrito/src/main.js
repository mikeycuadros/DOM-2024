// --------------- CLASES CONSTRUCTORAS ----------------
// Gestion de dinamica de un carrito de la compra mediante funciones constructoras y poo.
// Objetivo: - Agregar producto al carrito dando nombre, cantidad y precio.
// - Editar productos permitiendo la cantidad.
// - Eliminar productos del carrito.
// - Actualizar el total a pagar dinamicamente.

import Carrito from "./components/Carrito";

// selecciono el app

const carrito = new Carrito();
// cargamos los datos del localStorage al carrito.
// carrito.cargarLocalStorage();

function pintarInterfazWeb() {
  const app = document.getElementById("app");
  function pintarCarrito() {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = carrito.productos
      .map(
        (producto, index) => `
      <li data-id="${index}"> ${producto.obtenerInfo()}
      <button class="btn-editar" data-id="${index}">Editar</button>
      <button class="btn-borrar" data-id="${index}">Borrar</button>
    </li>`
      )
      .join("");
    // calcular el total
  }

  const handlerSubmit = (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value.trim();
    const cantidad = Number(document.querySelector("#cantidad-producto").value);
    const precio = Number(document.querySelector("#precio-producto").value);
    //validaciones del formulario basica
    if (!nombre || cantidad < 0 || precio < 0) {
      alert("Debes de introducir valores en el formulario");
    }
    // añadimos el nombre, cantidad, precio a un producto del carrito
    carrito.agregarProducto(nombre, cantidad, precio);
    // ahora pintamos el carrito
    pintarCarrito();
  };

  const opcionesProducto = (event) => {
    // target es el COMPONENTE donde he hecho CLICK o lo que sea
    const indice = Number(event.target.dataset.id); // cuando pulso click obtengo el componente
    if (event.target.classList.contains("btn-borrar")) {
      carrito.borrarProducto(indice);
      pintarCarrito();
    }
    if (event.target.classList.contains("btn-borrar")) {
      alert("Voy a editar");
    }
  };

  app.innerHTML = `
    <h1>Carrito de la compra de productos</h1>
    <form id="form-producto">
      <input id="nombre-producto" type="text" placeholder="Nombre del producto"/>
      <input id="cantidad-producto" type="number" placeholder="Cantidad del producto"/>
      <input id="precio-producto" type="number" placeholder="Precio del producto"/>
      <button type="submit">Agregar producto</button>
    </form>
    <br/>

    <div id="lista-productos"></div>
    `;

  document
    .getElementById("form-producto")
    .addEventListener("submit", handlerSubmit);

  document
    .getElementById("lista-productos")
    .addEventListener("click", opcionesProducto);
}

// --------------------------- INICIO DE LA APLICACION -------------------
pintarInterfazWeb();
