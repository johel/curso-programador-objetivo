let numeros = [5, 2, 4, 1, 3];

function sum(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    result = result + el;
  }

  return result;
}

// sum(numeros) => 15

function multiply(numbers) {
  let multiplicacao = 1;

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    result = result * el;
  }

  return multiplicacao;
} // multiply(numeros) => 120

function sumEven(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    if (el % 2 === 0) {
      result = result + el;
    }
  }

  return result;
} // sumEven(numeros) => 6

function sumOdd(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    if (el % 2 !== 0) {
      result = result + el;
    }
  }

  return result;
} // sumOdd(numeros) => 9

function sumOdd2(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    let isEven = el % 2 === 0;
    if (!isEven) {
      result = result + el;
    }
  }

  return result;
} // sumOdd2(numeros) => 9
