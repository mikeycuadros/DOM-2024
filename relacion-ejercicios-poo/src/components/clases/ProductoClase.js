class ProductoClase {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  actualizarStock(cantidad) {
    this.stock += cantidad;
    return `Stock actualizado ${this.stock}`;
  }
}
