function Producto(nombre, precio, stock) {
  let nombre = nombre;
  let precio = precio;
  let stock = stock;

  this.actualizarStock = function (cantidad) {
    this.stock += cantidad;
    return `Stock actualizado ${this.stock}`;
  };
}
