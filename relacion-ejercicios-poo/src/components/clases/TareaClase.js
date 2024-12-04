class TareaClase {
  static #contadorId = 0;
  #id;

  constructor(nombre) {
    this.#id = ++TareaClase.#contadorId;
    this.nombre = nombre;
    this.completada = false;
  }

  getId() {
    return this.#id;
  }

  static generarId() {
    return ++this.#contadorId;
  }

  toggleCompletada() {
    this.completada = !this.completada;
  }
}
