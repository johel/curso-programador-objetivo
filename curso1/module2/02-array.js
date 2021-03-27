let numeros = [5, 4, 3, 2, 1];
// numeros[0] => 5
// numeros[4] => 1

let quantidadeDeNumeros = numeros.length;
console.log(quantidadeDeNumeros);

numeros.push(0);
console.log(numeros);

let ultimoNumero = numeros[numeros.length - 1]; // 0
console.log(ultimoNumero);

numeros.push(-1);
ultimoNumero = numeros[numeros.length - 1]; // -1
console.log(ultimoNumero);

let numerosAoContrario = numeros.slice().reverse();
console.log(numerosAoContrario);

let list1 = [6, 7, 8];
let list2 = [1, 2, 3];

let unionList = list1.concat(list2);
console.log(unionList);

let orderedNumbers = numeros.slice().sort();
console.log(orderedNumbers);
