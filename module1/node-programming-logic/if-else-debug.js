// 1. escrever uma função isMultipleOfTwo, tal que:
// isMultipleOfTwo(4) => true; isMultipleOfTwo(5) => false

//Dica: para um n inteiro, n é múltiplo de 2, se n%2==0;

function isMultipleOfTwo(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isMultipleOfTwo2(n) {
  var result;
  if (n % 2 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

function isMultipleOfTwo3(n) {
  var result = n % 2 === 0;
  return result;
}

// 2. escrever uma função ugabuga
// se n for múltiplo de 2, ugabuga(2) => "uga"
// se n for múltiplo de 3, ugabuga(3) => "buga"
// se n for múltiplo de 6, ugabuga(6) => "ugabuga"
// se n não for múltiplo de 2,3 nem 6, ugabuga(7) => "buguei"

function ugabugaBugado(n) {
  var result;
  if (n % 2 === 0) {
    result = "uga";
  } else if (n % 3 === 0) {
    result = "buga";
  } else if (n % 6 === 0) {
    result = "ugabuga";
  } else {
    result = "buguei";
  }

  return result;
}

function ugabuga(n) {
  var result;
  // é a mesma coisa que n%6 === 0
  if (n % 2 === 0 && n % 3 === 0) {
    result = "ugabuga";
  } else if (n % 3 === 0) {
    result = "buga";
  } else if (n % 2 === 0) {
    result = "uga";
  } else {
    result = "buguei";
  }

  return result;
}

// ugabuga(2); // "uga";
// ugabuga(3); // "buga";
// ugabugaBugado(6); // "ugabuga";
// ugabuga(6); // "ugabuga";
// ugabuga(7); // "buguei";

// 3. criar duas funções
// A primeira função é pra verificar se um texto tiver pelo menos 10 caracteres;
// A segunda função é para verificar se um texto, ele inclui a palavra mar;
// A terceira é largeMar(text)
// se text for pelo 10 caracteres, retorna large
// se text tiver a palavra mar, retorna mar
// se text tiver a palavra mar e pelo menos 10 caracteres, retorna largeMar
// caso contrário retorna "nra";

// ex: // largeMar("dsdopfkdskfpfksopf") => "large"
// ex: // largeMar("mar areia") => "mar"
// ex: // largeMar("programar é legal") => "largeMar"
// ex: // largeMar("nenhuma") => "nra"

// dica: usar text.length e text.includes("something")

function includesExactlyMar(text) {
  return text.includes("mar");
}

function includesAnyMar(text) {
  return text.toLowerCase().includes("mar");
}

function hasAtLeastTenCharacters(text) {
  return text.length >= 10;
}

function largeMar(text) {
  var result;
  if (includesAnyMar(text) && hasAtLeastTenCharacters(text)) {
    result = "largeMar";
  } else if (includesAnyMar(text)) {
    result = "mar";
  } else if (hasAtLeastTenCharacters(text)) {
    result = "large";
  } else {
    result = "nra";
  }

  return result;
}

largeMar("MARÍTIMOOOOOOO");

//
//
//

function nestedFunction() {
  var a = getA();
  var b = getB(a);

  var result = a + b + getC(a, b);

  return result;
}

function getA() {
  return 2;
}

function getB(a) {
  return 3 * a;
}

function getC(a, b) {
  return a * b;
}

// nestedFunction();
