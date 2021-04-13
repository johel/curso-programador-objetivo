let usuario = { email: "email@gmail.com" };
usuario["teste"] = "olá";

if (usuario["name"]) {
  console.log("name é uma prop que existe");
} else {
  console.log("name é uma prop que não existe existe");
}

console.log("----");
