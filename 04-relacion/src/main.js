// import {
//   Empleado,
//   EmpleadoClases,
//   EmpleadoFreelance,
//   EmpleadoFreelanceClases,
// } from "./helpers/Ejercicio3";

// // ----------------------- ejercicio 3 --------------------
// console.log("---------------- Ejercicio 3 --------------------");
// const empleado1 = new Empleado("Juan", 25, "junior");
// const empleado2 = new Empleado("Ana", 30, "semiSenior");
// empleado1.info();
// empleado2.info();

// const freelance1 = new EmpleadoFreelance("Pedro", 35, 50);
// const freelance2 = new EmpleadoFreelance("Maria", 40, 60);

// freelance2.info(60);

// console.log("---------------- Ejercicio 3 con clases--------------------");

// const empleadoClase1 = new EmpleadoClases("Mario", 35, "senior");
// const empleadoClase2 = new EmpleadoClases("Ana Maria", 35, "senior");
// empleadoClase1.info();
// empleadoClase2.info();

// const empleadoFreelanceClase1 = new EmpleadoFreelanceClases("Rodolfo", 35, 50);
// const empleadoFreelanceClase2 = new EmpleadoFreelanceClases("Maria Jose", 40, 60);
// empleadoFreelanceClase1.info(50);
// empleadoFreelanceClase2.info(60);

// ------------------------ ejercicio 7 --------------------

import { GestionUsuarioClase, UsuarioClase } from "./helpers/Ejercicio7";

(async function () {
  function handlerClickEliminar(event) {
    if (event.target.classList.contains("btn-eliminar")) {
      const indice = Number(event.target.dataset.id);
      // eliminar el usuario que esta en la posicion del array[indice]
      gestorUser.usuarios.splice(indice, 1);
      divListaUsuarios.innerHTML = gestorUser.usuarios
        .map((user, index) => {
          return `
            <li data-id="${index}">
            ${user.info()}
            <button class="btn-eliminar" data-id="${index}">Eliminar</button>
            </li>
        `;
        })
        .join("");
    }
  }

  function handlerBuscarUsuario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
  }

  const gestorUser = new GestionUsuarioClase();
  console.log(await gestorUser.fetchUsuarios());

  const app = document.getElementById("app");
  const h1Element = document.createElement("h1");
  h1Element.textContent = "Uso de POO con JSONPlaceHolder";
  app.appendChild(h1Element);
  const divBuscar = document.createElement("div");
  divBuscar.id = "buscar-usuarios";
  app.appendChild(divBuscar);
  divBuscar.innerHTML = `
    <form id="form-usuario">
        <input id="nombre" type="text" placeholder="Nombre del usuario">
        <button class="btn-buscar" id="buscar" type="submit" >Buscar</button>
    </form>
  `;

  const divListaUsuarios = document.createElement("div");
  divListaUsuarios.id = "lista-usuarios";
  app.appendChild(divListaUsuarios);

  divListaUsuarios.innerHTML = gestorUser.usuarios
    .map((user, index) => {
      return `
            <li data-id="${index}">
            ${user.info()}
            <button class="btn-eliminar" data-id="${index}">Eliminar</button>
            </li>
        `;
    })
    .join("");

  document
    .getElementById("lista-usuarios")
    .addEventListener("click", handlerClickEliminar);

  document
    .querySelector("#form-usuario")
    .addEventListener("submit", handlerBuscarUsuario);
})();

// Renderizar en el DOM un formulario que permita a traves de un input y el boton de buscar, buscar por nombre los usuarios de mi clase GestionUSuarioClase. Ademas pintaremos en un div llamado lista usuarios, atraves de li, pintaremos la data de todos los usuarios (nombre, email, rol) junto con el boton de borrar y que el boton sea un icono de una papelera.
