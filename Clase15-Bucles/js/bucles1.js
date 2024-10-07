let pokemon = prompt("Ingrese un pokemon");
pokemon = pokemon.toLowerCase();

//"charmander" "charmeleon" "charizard"
while (
  pokemon != "charmander" &&
  pokemon != "charmeleon" &&
  pokemon != "charizard" &&
  pokemon != "fin"
) {
  pokemon = prompt("No conozco ese pokemon ingrese otro o fin");
  pokemon = pokemon.toLowerCase();
}

if (pokemon == "fin") {
  console.log("Programa terminado, actualizaremos luego");
} else {
  console.log(pokemon + " si lo conozco");
}
