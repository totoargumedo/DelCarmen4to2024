// let nombre = prompt("Ingrese el nombre de tu Pokémon:");
let tipo = prompt("Ingrese el tipo de tu Pokémon:");
let nivel = parseInt(prompt("Ingrese el nivel de tu Pokémon:"));

if (nivel < 1) {
  alert("El nivel de un Pokémon no puede ser menor a 1.");
}

const fuego = "fuego";
const aguar = "agua";
const planta = "planta";

if (tipo === "Fuego") {
  if (nivel >= 20) {
    console.log(nombre + " puede usar Lanzallamas.");
  } else {
    console.log(nombre + " puede usar Ascuas.");
  }
} else if (tipo === "Agua") {
  if (nivel >= 20) {
    console.log(nombre + " puede usar Chorro de Agua.");
  } else {
    console.log(nombre + " puede usar Ventisca.");
  }
} else {
  console.log(
    "Tipo de Pokémon no reconocido. No podemos determinar habilidades"
  );
}

// Mostrar los Pokémon y sus habilidades
console.log("Pokémon:");
console.log("- Nombre:", nombre);
console.log("- Tipo:", tipo);
console.log("- Nivel:", nivel);

let nombre = "Pedro Pérez Pereyra";

let edad = 33;

const esFalso = true;
