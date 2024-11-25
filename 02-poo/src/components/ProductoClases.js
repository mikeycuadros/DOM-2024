export class ProductoClases {
  #nombre;
  #precio;
  #stock;
  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#stock = stock;
  }

  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getPrecio() {
    return this.#precio;
  }
  setPrecio(precio) {
    this.#precio = precio;
  }
  getStock() {
    return this.#stock;
  }
  setStock(stock) {
    this.#stock = stock;
  }

  actualizarStock(cantidad) {
    this.#stock = cantidad;
    return `Stock actualizado ${this.getStock()}`;
  }

  obtenerInfo() {
    return `Producto: ${this.getNombre()}, Precio: ${this.getPrecio()}, Stock: ${this.getStock()}`;
  }
}
