let numeros = [5, 2, 4, 1, 3];

function min(list) {
  let result = list[0];

  for (let i = 0; i < list.length; i++) {
    let el = list[i];
    if (el < result) {
      result = el;
    }
  }

  return result;
} // min(numeros) => 1
