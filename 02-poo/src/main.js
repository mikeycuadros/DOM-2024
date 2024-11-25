// // 1. - Crear una clase para modelar un sistema de usuario que puedan iniciar sesion y cerrar sesion. Y actualizar su perfil
// // ---------------- SOLUCION CON FUNCIONES CONTRUCTORAS ----------------

import { Producto } from "./components/Producto";

// function Usuario(nombre, email, password) {
//   this.nombre = nombre; //variables de instacia publica
//   this.email = email;
//   let _password = password; //variable de instacia privada

//   // ---------- Metodos publicos --------------------
//   this.login = function (email, password) {
//     // NO USAR ARROW FUNCTION A NO SER QUE DOMINEMOS
//     if (this.email === email && _password === password) {
//       console.log(`Bienvenido ${this.nombre}`);
//     }
//     return "Email o password incorrectas";
//   };

//   this.updateEmail = function (newEmail) {
//     if ((this.email = newEmail)) {
//       return `Email actualizado a ${newEmail}`;
//     }
//   };
// }

// // Crear una instancia

// const usuario1 = new Usuario("Juan", "juan@gmail.com", "123456");

// // --------------- Lo mostramos en el dom ---------------

// const app = document.getElementById("app");

// function renderUsuario() {
//   // funcion que pinta en el app el usuario
//   app.innerHTML = `
//     <h2>Usuario: ${usuario1.nombre}</h2>
//     <p>Email: ${usuario1.email}</p>
//     <button id="btnLogin">Login</button>
//     `;

//   const btnLogin = document.getElementById("btnLogin");
//   btnLogin.addEventListener("click", () => {
//     console.alert(usuario1.login("juan@gmail.com", "123456"));
//   });
// }

// // ---------------------- SOLUCION CON CLASES ----------------

// class Usuario {
//   // las variables privadas se declaran anteponiendo una # al nombre
//   #password;
//   constructor(nombre, email, password) {
//     this.nombre = nombre;
//     this.email = email;
//     this.#password = password;
//   }

//   login(email, password) {
//     if (this.email === email && this._password === password) {
//       console.log(`Bienvenido ${this.nombre}`);
//     }
//     return "Email o password incorrectas";
//   }

//   updateEmail(newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${newEmail}`;
//   }
// }

// const usuario2 = new Usuario("Pepe", "pepe@gmail.com", "123456");

// Implementar un modelo de producto con fuciones productoras y clases, que permitan: Obtener informacion del producto, Actualizar el stock, debiendo guardar nombre, precio y stock.

// -------------------------------- Producto ----------------------------
// ---------------- SOLUCION CON FUNCIONES CONSTRUCTORAS----------------------------

const productos = [
  new Producto("Portatil", 510, 10),
  new Producto("Movil", 1500, 20),
  new Producto("Tablet", 300, 5),
];

const app = document.getElementById("app");

app.innerHTML = `
    <h2>Gestión de productors</h2>
    ${productos
      .map((producto, index) => {
        return `<li>${producto.obtenerInfo()}
        <button class="btn-actualizar-stock" data-index="${index}">Actualizar stock</button>
        </li>`;
      })
      .join("")}
`;

// Evento para actualizar el stock

document.querySelectorAll(".btn-actualizar-stock").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Actualizar stock");
  });
});
