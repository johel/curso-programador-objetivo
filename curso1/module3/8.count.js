let numeros = [5, 2, 4, 1, 3, 9];

function countOddNumbers(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    if (el % 2 !== 0) {
      count = count + 1;
    }
  }

  return count;
}

countOddNumbers(numeros);
