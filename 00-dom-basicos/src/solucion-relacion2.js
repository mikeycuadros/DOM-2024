//   # Relación II de básicos selección.

// ---------- Declaracion de varibales ----------

// ----------- Declaracion de funciones ----------

const handlerClickSpan = (event) => {
  const span = event.target;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  span.style.backgroundColor = `#${randomColor}`;
};

const handlerDoubleClickParrafo = (event) => {
  const parrafo = event.target;
  alert(parrafo.textContent);
};

// ### Ejercicio 1:
// Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.

document.addEventListener("DOMContentLoaded", function () {
  const spans = document.querySelectorAll("#contenedorSecundario span");
  spans.forEach((span) => {
    span.addEventListener("click", handlerClickSpan);
  });
});

// ### Ejercicio 2:
// Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.

document.addEventListener("DOMContentLoaded", function () {
  const parrafos = document.querySelectorAll(".parrafo");
  parrafos.forEach((parrafo) => {
    parrafo.addEventListener("dblclick", handlerDoubleClickParrafo);
  });
});

// ### Ejercicio 3:
// Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`. Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.

// ### Ejercicio 4:
// Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document
        .querySelectorAll("#contenedorSecundario p")
        .forEach((parrafo) => {
          parrafo.textContent = "Has pulsado enter";
          parrafo.innerText = "Has pulsado enter";
          parrafo.innerHTML = "Has pulsado enter";
        });
    }
  });
});

// ### Ejercicio 5:
// Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".etiqueta").forEach((etiqueta) => {
    etiqueta.addEventListener("click", () => {
      etiqueta.remove();
    });
  });
});

// ### Ejercicio 6:
// Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#contedorSecundario span").forEach((span) => {
    span.addEventListener("mouseover", () => {
      span.style.color = "blue";
    });
    span.addEventListener("mouseout", () => {
      span.style.color = "black";
    });
  });
});

// ### Ejercicio 7:
// Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".

document.addEventListener("DOMContentLoaded", function () {});

// ### Ejercicio 8:
// Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#contenedorPrincipal img")
    .addEventListener("click", () => {
      document.querySelectorAll("#contenedorPrincipal p").forEach((parrafo) => {
        const currentSize = window.getComputedStyle(parrafo).fontSize;
        console.log(currentSize.toStringntSize);
        parrafo.style.fontSize = `${parseInt(currentSize) * 2}px    `;
      });
    });
});

// ### Ejercicio 9:
// Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", (event) => {
    alert(`Has pulsado la tecla ${event.key}`);
  });
});

// ### Ejercicio 10:
// Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.

document.addEventListener("DOMContentLoaded", function () {
  const contenedorPrincipal = document.querySelector("#contenedorPrincipal");
  contenedorPrincipal.addEventListener("click", () => {
    contenedorPrincipal.style.backgroundColor = "green";
  });
});
