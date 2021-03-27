var texto = "johel";
var list = [1, 2, 3];

list.length;
texto.length;
texto[0];
list[0];

let textParts = texto.split("");
console.log(textParts);
let textPartsReversed = textParts.reverse();
console.log(textParts);
let textoAoContrario = textPartsReversed.join("");
console.log(textoAoContrario);
