// Contador de visitas (del navegador) usando localStorage
let visitas = localStorage.getItem("contadorVisitas");

if (visitas === null) {
  visitas = 0;
}

visitas = Number(visitas) + 1;
localStorage.setItem("contadorVisitas", visitas);

// Mostrar el contador en la página si existe el elemento
const contador = document.getElementById("contador-visitas");
if (contador) {
  contador.textContent = "Visitas en este navegador: " + visitas;
}

// Botón para reiniciar (si existe)
const btnReset = document.getElementById("reset-visitas");
if (btnReset) {
  btnReset.addEventListener("click", () => {
    localStorage.setItem("contadorVisitas", 0);
    if (contador) {
      contador.textContent = "Visitas en este navegador: 0";
    }
  });
}
