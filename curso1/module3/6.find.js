let numeros = [2, 6, 4, 1, 3];

function findFirstMultipleOf3(numbers) {
  let el;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      el = numbers[i];
      break;
    }
  }

  return el;
}

// findFirstMultipleOf3(numeros); =>

function findIndexOfFirst5Multiple(numbers) {
  let index = -1;
  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];

    if (el % 5 === 0) {
      index = i;
      break;
    }
  }

  return index;
}

findIndexOfFirst5Multiple(numeros);
