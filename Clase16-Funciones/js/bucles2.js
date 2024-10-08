let pokemon = prompt("Ingrese el nombre de un pokemon");
pokemon = pokemon.toLowerCase();
let nivel = prompt("Ingrese el nivel del pokemon");
nivel = Number(nivel);
if (!nivel) {
  nivel = prompt("Solo recibo numeros para el nivel del pokemon");
}

if (
  pokemon == "charizard" ||
  pokemon == "charmander" ||
  pokemon == "charmeleon"
) {
  console.warn(pokemon + " es de tipo fuego");

  if (nivel <= 15) {
    console.log(pokemon + " puede usar Flama");
  } else if (nivel > 15 && nivel <= 30) {
    console.log(pokemon + " puede usar Llamarada");
  } else if (nivel > 30) {
    console.log(pokemon + " puede usar Apocalipsis");
  } else {
    console.log(
      "No conozco los movimientos de " + pokemon + "de nivel " + nivel
    );
  }
} else if (
  pokemon == "bulvasaur" ||
  pokemon == "ivysaur" ||
  pokemon == "grandote"
) {
  console.warn(pokemon + " es de tipo planta");

  if (nivel <= 15) {
    console.log(pokemon + " puede usar Hojas");
  } else if (nivel > 15 && nivel <= 30) {
    console.log(pokemon + " puede usar Mas Hojas");
  } else if (nivel > 30) {
    console.log(pokemon + " puede usar Mil Hojas");
  } else {
    console.log(
      "No conozco los movimientos de " + pokemon + "de nivel " + nivel
    );
  }
} else {
  console.error("No conozco el tipo de ese pokemon");
}
