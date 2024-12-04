function Tarea(nombre) {
  let _id = Tarea.generarId();
  let nombre = nombre;
  let completada = false;

  this.generarId = function () {
    let contador = 0;
    return function () {
      return ++contador;
    };
  };

  this.getId = function () {
    return _id;
  };

  this.toggleCompletada = function (completada) {
    completada = !completada;
  };
}
