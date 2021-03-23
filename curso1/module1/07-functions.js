// s(a, b) = a + b;
function soma(a, b) {
  return a + b;
}

let resultado = soma(8, 9);
console.log(resultado);
console.log("---");

let numero = 10;
let number = 11;
let resultado2 = soma(numero, number);
console.log(resultado2);
console.log("---");

// m(a,b) = a x b;
function anyName(girafa, leao) {
  return girafa * leao;
}

let result3 = anyName(9, 7); // 63
console.log(result3);
console.log("---");

// f(a,b) = (a+b)² = a² + 2ab + b²
function squarePlus(a, b) {
  let result = a * a + 2 * a * b + b * b;
  return result;
}

// g(a,b) = (a-b)² = a² - 2ab + b²
function squareDifference(a, b) {
  let aux = a * a - 2 * a * b + b * b;
  return aux;
}

function teste() {
  let x = 2 + 3 + 5;
}

let result4 = teste();
console.log(result4);
console.log("-----");
