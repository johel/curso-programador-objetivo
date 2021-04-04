let numeros = [5, 2, 1, 3, 7];

function everyNumberLessThan6(numbers) {
  let resultado = true;

  for (let i = 0; i < numbers.length; i = i + 1) {
    let el = numbers[i];
    if (el >= 6) {
      resultado = false;
      break;
    }
  }

  return resultado;
}
everyNumberLessThan6(numeros);

function includesNumber4(numbers) {
  let resultado = false;

  for (let i = 0; i < numbers.length; i = i + 1) {
    let el = numbers[i];
    if (el === 4) {
      resultado = true;
      break;
    }
  }

  return resultado;
}

includesNumber4(numeros);
