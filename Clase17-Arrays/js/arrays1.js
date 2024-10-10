console.log("Inicio de programa");

let dato = 33;
const array1 = [
  "squirtle",
  "charmander",
  "charmeleon",
  "charizard",
  "bulvasaur",
];

let pokemon = prompt("Ingrese un pokemon para cargar o fin para salir");
pokemon = pokemon.toLowerCase();

while (pokemon != "fin") {
  array1.push(pokemon);
  pokemon = prompt("Ingrese un pokemon para cargar o fin para salir");
  pokemon = pokemon.toLowerCase();
}

for (let i = 0; i < array1.length; i++) {
  console.log("Indice " + i + " " + array1[i]);
}

let pokemonExite = false;
let pokemonBuscar = prompt("Ingrese un pokemon a buscar");
pokemonBuscar = pokemonBuscar.toLowerCase();

for (let i = 0; i < array1.length; i++) {
  if (pokemonBuscar === array1[i]) {
    pokemonExite = true;
  }
}

if (pokemonExite === true) {
  console.log("Existe!");
} else {
  console.log("No existe");
}

console.log("Fin de programa");
