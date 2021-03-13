const usuario = {
  nome: "Flávia",
  idade: 18,
  email: "flavia18@hotmail.com",
  empresa: "Tesla",
  empresa: "Microsoft",
};

let nomeDaPropriedade = "empresa";

// console.log(usuario.empresa);
// console.log(usuario["empresa"]);
// console.log(usuario[nomeDaPropriedade]);

// usuario.empresa = "nome da empresa"
// usuario["empresa"] = "nome da empresa";

function getKeys(objetoQualquer) {
  const result = Object.keys(objetoQualquer);
  return result;
}

getKeys(usuario);

function distinctElements(list) {
  var mapeamento = {};
  var result = [];
  for (var i = 0; i < list.length; i++) {
    const el = list[i];
    if (mapeamento[el] === undefined) {
      mapeamento[el] = true;
      result.push(el);
    }
  }

  return result;
}

// distinctElements([1, 1, 2, 3, 6, 2]);

// mapa = {};
// encontro o 1 => mapa[1] é undefined => mapa[1] = true;
// encontro o 1 => mapa[1] é undefined ?  => mapa[1] = true;

function entendimentoDoMap() {
  const meuMapa = {};
  Object.keys(meuMapa); //  => []
  meuMapa.teste = "olá";
  Object.keys(meuMapa); // => ["teste"]
  meuMapa.idade = 12; // {teste:"olá", idade: 12}
  Object.keys(meuMapa); // => ["teste", "idade"]
  meuMapa[1] = true; // {teste:"olá", idade: 12, 1: true}
  Object.keys(meuMapa); //  => ["teste", "idade", "1"]
  meuMapa[2] = true; // {teste:"olá", idade: 12, 1: true, 2: true}
  Object.keys(meuMapa); //  => ["teste", "idade", "1", "2"]
  meuMapa[2] = "cachorro"; // {teste:"olá", idade: 12, 1: true, 2: "cachorro"}
  Object.keys(meuMapa); //  => ["teste", "idade", "1", "2"]
  if (meuMapa[3] === undefined) {
    meuMapa[3] = { number: 438234903 }; // {teste:"olá", idade: 12, 1: true, 2: "cachorro", 3: { number: 438234903 }}
    Object.keys(meuMapa); //  => ["teste", "idade", "1", "2", "3"]
  }

  return meuMapa;
}

var texto = "abacatada";
var letterCountMap = {
  a: 5,
  b: 1,
  c: 1,
  t: 1,
  d: 1,
};

function getLetterCountMap(text) {
  let result = {};
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter] = result[letter] + 1;
    }
  }

  return result;
}

getLetterCountMap("abacatada");

const TYPES = {
  flight: "fl",
  hotel: "ht",
  car: "cr",
};

function isTypeValid(type) {
  const typeKeys = Object.keys(TYPES);
  const typeValues = typeKeys.map((key) => TYPES[key]);
  const isValid = typeValues.includes(type);
  return isValid;
}

// isTypeValid("fdsfds"); // false
isTypeValid("fl"); // true
