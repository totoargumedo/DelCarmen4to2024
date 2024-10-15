const coleccion = [
  { nombre: "squirtle", nivel: "33", tipo: "agua" },
  { nombre: "charmander", nivel: "12", tipo: "fuego" },
  { nombre: "bulvasaur", nivel: "12", tipo: "planta" },
];

let ingreso = prompt("QQuiere ingresar pokemones, ingrese si o no");
while (ingreso === "si") {
  let nombrePokemon = prompt("Ingrese nombre pokemon");
  let nivelPokemon = prompt("Ingrese nivel");
  let tipoPokemon = prompt("Ingrese tipo");

  let pokemon = {
    nombre: nombrePokemon,
    nivel: nivelPokemon,
    tipo: tipoPokemon,
  };

  coleccion.push(pokemon);

  ingreso = prompt("QQuiere ingresar pokemones, ingrese si o no");
}

for (let i = 0; i < coleccion.length; i++) {
  if (coleccion[i].tipo === "agua") {
    console.log(coleccion[i].nombre);
  }
}
