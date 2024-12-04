import { Producto } from "./Producto";

export default class Carrito {
  // constructor
  constructor() {
    // creamos un array de productos
    this.productos = [];
  }

  // metodos
  agregarProducto(nombre, cantidad, precio) {
    this.productos.push(new Producto(nombre, cantidad, precio));
    // lo guardamos tambien en el localStorage
    this.guardarLocalStorage();
  }

  /**
   *
   * @param {Number} index
   * @returns <void>
   */
  borrarProducto(index) {
    this.productos.splice(index, 1);
    // lo actualizo en el localStorage
    this.guardarLocalStorage();
  }

  editarProducto(index, newCantidad) {
    if (newCantidad > 0) {
      this.productos[index].cantidad = newCantidad;
      // actualizar el localStorage
      this.guardarLocalStorage();
    }
  }

  calcularTotalCarrito() {
    return this.productos.reduce(
      (total, producto) => total + producto.calcularTotal(),
      0
    );
  }

  guardarLocalStorage() {
    // setItem("clave", valor) // --> para guardar hay stringify.....
    localStorage.setItem("carrito", JSON.stringify(this.productos));
  }

  cargarLocalStorage() {
    const datosCarrito = JSON.parse(localStorage.getItem("carrito"));
    if (datosCarrito) {
      //tengo que crear un array de productos
      this.productos = datosCarrito.map((producto) => {
        return new Producto(
          producto.nombre,
          producto.cantidad,
          producto.precio
        );
      });
    }
  }
}
