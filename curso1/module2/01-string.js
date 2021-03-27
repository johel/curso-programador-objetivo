let a = "texto com aspas duplas";
let b = "texto com aspas simples";
let c = new String("um texto qualquer");

let ehAMenorQueB = "a" < "b";
console.log(ehAMenorQueB);

let isAspasPresent = a.includes("aspasgfdgfd");
console.log(isAspasPresent);

let vogais = "aeiou";
let primeiraLetra = vogais[vogais.length - 1];
console.log(primeiraLetra);

let textoDe8Caracteres = "olá, olá";
let tamanhoDoTexto = textoDe8Caracteres.length;
console.log(tamanhoDoTexto);

let palavrasDoTextoB = b.split(" ");
console.log(palavrasDoTextoB);

let abertura = "Era uma vez. Uma bela história.";
let aberturaCaixaAlta = abertura.toUpperCase();
let aberturaCaixaBaixa = abertura.toLowerCase();
console.log(aberturaCaixaBaixa);
