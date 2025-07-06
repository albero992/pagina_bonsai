let posicion = 0;

function moverCuadro() {
  const cuadro = document.getElementById("cuadro");
  posicion += 100;
  cuadro.style.left = posicion + "px";
}