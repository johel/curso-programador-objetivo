let numeros = [5, 2, 4, 1, 3];

function mapAddingTwo(list) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    let el = list[i];
    result.push(el + 2);
  }

  return result;
}

mapAddingTwo(numeros);
