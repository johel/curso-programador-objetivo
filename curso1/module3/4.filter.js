let numeros = [5, 2, 4, 1, 3];

function filterGreaterThan3(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    if (el > 3) {
      result.push(el);
    }
  }

  return result;
}

filterGreaterThan3(numeros);
