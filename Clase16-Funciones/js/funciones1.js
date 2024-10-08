console.log("Inicio de programa");
let nombre = prompt("Ingrese un nombre");
nombre = minusculas(nombre);

if (nombre === "pepe") {
  pepeContame();
}

function pepeContame() {
  console.log("Hola pepe");
  console.log("Contame hasta 20");
  for (let contando = 1; contando < 21; contando++) {
    console.log(contando);
  }
}

function minusculas(textoEntrada) {
  textoEntrada = textoEntrada.toLowerCase();
  return textoEntrada;
}

console.log("Fin de programa");
