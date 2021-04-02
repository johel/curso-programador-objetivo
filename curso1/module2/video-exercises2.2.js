// Introdução
function sum1toN(n) {
  let acc = 0;
  for (let i = 1; i <= n; i++) {
    let el = i;
    acc = acc + el;
  }

  return acc;
}

// sum1toN(5);

function multiply1toN(n) {
  let acc = 1;
  for (let i = 1; i <= n; i++) {
    let el = i;
    acc = acc * el;
  }

  return acc;
}

multiply1toN(5);

// 1. Criar uma função que calcula a soma de uma progressão aritmética
// de n elementos, de razão r e o primeiro elemento é o initialValue

function aritmeticProgressionSum(initialValue, r, n) {
  let acc = 0;
  for (let i = 1; i <= n; i = i + 1) {
    let el = initialValue + (i - 1) * r;
    acc = acc + el;
  }

  return acc;
}

function basicAritmeticProgressionSum(n) {
  let acc = 0;
  for (let i = 1; i <= n; i = i + 1) {
    let el = 1 + (i - 1) * 1; // el = 1 + i -1 => i
    acc = acc + el;
  }

  return acc;
}

function sum(n) {
  let acc = 0;
  for (let i = 1; i <= n; i = i + 1) {
    let el = i;
    acc = acc + el;
  }

  return acc;
}

// 2. Criar uma função que calcula a soma de uma progressão geométrica
// de n elementos, de razão r e o primeiro elemento é o initialValue

// a1 = initialValue
// a2 = a1 * r
// a3 = a2 * r => a1 * r^2
// a4 = a3 * r => a1 * r^2 * r=> a1 * r^3
// .
// .
// ai => a1 * r^(i-1)
// .
// .
// an => a1 * r^(n-1)

function geometricProgressionElementAtIndex(initialValue, r, index) {
  let el = initialValue * Math.pow(r, index - 1);
  return el;
}

function geometricProgressionSum(initialValue, r, n) {
  let acc = 0;
  for (let i = 1; i <= n; i = i + 1) {
    let el = geometricProgressionElementAtIndex(initialValue, r, i);
    acc = acc + el;
  }

  return acc;
}

// 3. Criar uma função que calcula o máximo divisor comum de dois numeros
// mdc(12, 20); // =>
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4

// máximo divisor comum, ou seja, é o valor máximo de um numero que divide
// simultaneamente dois numeros

function isNumberDivisibleBy(n, factor) {
  return n % factor === 0;
}

function factorDividesN1AndN2(factor, n1, n2) {
  return isNumberDivisibleBy(n1, factor) && isNumberDivisibleBy(n2, factor);
}

function mdc(n1, n2) {
  let mdc = Math.min(n1, n2);

  while (!factorDividesN1AndN2(mdc, n1, n2)) {
    mdc = mdc - 1;
  }

  return mdc;
}

mdc(12, 20);
