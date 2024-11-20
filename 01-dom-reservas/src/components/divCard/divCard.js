//Crear un parrafo
const divCard = document.createElement("div");
divCard.id = "card";
divCard.classList.add("principal card");

//Crear un parrafo
const p = document.createElement("p");
p.innerText = "Soy un parrafo";
divCard.appendChild(p);

//Crear un botón
const buttonMensaje = document.createElement("button");
buttonMensaje.innerText = "Mostrar mensaje";
divCard.appendChild(button);
