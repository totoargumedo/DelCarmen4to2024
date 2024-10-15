console.log("Inicio de programa");

let pokemon1 = {
  nombre: "charmander",
  tipo: "hielo",
  nivel: 18,
  entrenado: true,
};

console.log(pokemon1);
pokemon1.ataque1 = "lanzallamas";
console.log(pokemon1);

if (pokemon1.tipo == "fuego") {
  console.log("Tu pokemon esta listo para ser entrenado");
} else {
  console.log("Tu pokemon no tiene nivel");
}

console.log("Fin de programa");
