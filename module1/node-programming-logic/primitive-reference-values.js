// PRIMITIVE VALUES

let a = 1;
let b = "texto gfd";
let c = true;

let aIdentico = 1;
let bIdentico = "texto gfd";

// console.log(a === aIdentico);
// console.log(b === bIdentico);

// let d = new Date();

// REFERENCE VALUES
let teste = {
  name: "johel",
  idade: 32,
};

let list = [1, 2, 3, 4];

let testeIdentico = {
  name: "johel",
  idade: 32,
};

console.log(teste === testeIdentico);
console.log("dffds");

function mudaValor1(a) {
  a = 2;
}

function mudaValor2(a) {
  a = { teste: "josé", idade: 40 };
}

// let primitiva = 1;
// mudaValor1(primitiva);
// console.log(primitiva);

// let referencia = { name: "johel", idade: 32 }; // gaveta A
// mudaValor2(referencia);
// console.log(referencia);

let usuario = { name: "Igor", idade: 32 }; // gaveta B
function mudaNome(a) {
  var a = { name: "Igor", idade: 32 }; // gaveta B
  a.name = "Mário";
}

mudaNome(usuario);
console.log(usuario);
console.log("fdsg");

var numeros = [1, 2, 4, 6];
function naoAlteraReferencia(a) {
  a = [1, 2, 3];
}

function alteraConteudoDaReferencia(a) {
  a.push(2021);
}

alteraConteudoDaReferencia(numeros);
console.log(numeros);
