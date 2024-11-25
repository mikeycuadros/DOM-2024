// -------------------- inicio de la aplicación --------------------
document.addEventListener("DOMContentLoaded", () => {
  const elementDiv = document.getElementById("contenedorPrincipal");
  const elementH1 = elementDiv.querySelector("h1");
  console.log(elementH1);
  console.log(elementH1.textContent);

  const elementH1v2 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");
  console.log(elementH1v2);
});

// ### Ejercicio 2:
// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorSecundario`.

const parrafosDiv = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(parrafosDiv);

// ### Ejercicio 3:
// Selecciona el elemento `img` por su atributo `src`.

const elementImg = document.querySelector("img[src = 'imagen.png']");
console.log(elementImg);

// ### Ejercicio 4:
// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

const elementSpan = document.querySelectorAll("#contenedorSecundario span");
console.log(elementSpan);

// ### Ejercicio 5:
// Selecciona el primer párrafo con la clase "importante".

const elementImportante = document.querySelector(".parrafo.importante");
console.log(elementImportante);

// ### Ejercicio 6:
// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".

const parrafosContenedorPrincipal = document.querySelectorAll(
  "#contenedorPrincipal p"
);
console.log(parrafosContenedorPrincipal);

// ### Ejercicio 7:
// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".

const elementAtributo = document.querySelectorAll("[data-atributo='valor1']");
console.log(elementAtributo);

// ### Ejercicio 8:

// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".

const parrafoImportante = document.querySelectorAll(".parrafo.importante");
parrafoImportante.length >= 1 ? console.log(parrafoImportante[1]) : null;

// ### Ejercicio 9:
// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".

const spanContenedor = document.querySelectorAll("#contenedorSecundario span");
console.log(spanContenedor);

// ### Ejercicio 10:
// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".

const tercerParrafoPrincipal = document.querySelectorAll(
  "#contenedorPrincipal .parrafo"
);

tercerParrafoPrincipal.length >= 2
  ? console.log(tercerParrafoPrincipal[2])
  : null;


