// 1. Crie uma função que retorna o valor mínimo entre dois números;

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    // b <=a
    return b;
  }
}

// 2. Crie uma função que retorna o número com menor valor absoluto;
function absolute(n) {
  if (n < 0) {
    return -1 * n;
  } else {
    return n;
  }
}

function minAbsolute(n1, n2) {
  if (absolute(n1) < absolute(n2)) {
    return n1;
  } else {
    return n2;
  }
}

// 3. Crie uma função que recebe os lados de um triângulo e determinado
// se ele é escaleno, equilátero ou isósceles;

function classifyTriangle(l1, l2, l3) {
  // escaleno: 1, 2, 3
  // isósceles: 1, 2, 2
  // equilátero: 3, 3, 3

  if (l1 === l2 && l1 === l3 && l2 === l3) {
    return "equilátero";
  } else if (l1 === l2 || l1 === l3 || l2 === l3) {
    return "isósceles";
  } else {
    return "escaleno";
  }
}

// 4. Crie uma função que verifica se um dado ano é bissexto;

function ehBissexto(ano) {
  // anos que são múltiplos de 4 vão ser bissextos na nossa fórmula;
  // isto é, vão possuir o dia 29 de fevereiro;

  // if (ano % 4 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  return ano % 4 === 0;
}

// 5. Crie uma função que retorna a divisão de dois numeros
// e não retorna nada, caso a operação seja indefinida ou impossível
function divide(a, b) {
  // não existe divisão por zero; 1/0 é um valor infinito
  if (b !== 0) {
    return a / b;
  }

  // não retorna nada, é equivalente a
  // return ou return undefined
}
