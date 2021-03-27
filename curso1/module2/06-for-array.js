let list = ["oi", "cara", "cadê", "meu", "carro"];

list[0];
list[list.length - 1];

// for (let i = 0; i < list.length; i++) {
//   let el = list[i];
//   console.log(el);
// }

for (let i = list.length - 1; i >= 0; i--) {
  let el = list[i];
  console.log(el);
}

console.log("---");
