let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1000];

function filterNumbers(numbers, verifyConditionFn) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (verifyConditionFn(number)) {
      result.push(number);
    }
  }

  return result;
}

function verifyEven(number) {
  return number % 2 === 0;
}

function verifyOdd(number) {
  return number % 2 !== 0;
}

function verifyGreaterThan10(number) {
  return number > 10;
}

const oddNumbers = filterNumbers(list, verifyOdd);
console.log(oddNumbers);
