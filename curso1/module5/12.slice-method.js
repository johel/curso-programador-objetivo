// Dado o mapa de posicionamentos abaixo,
// obter os elementos entre as posições 1 e 4;
let numbers = [1, 2, 3, 4, 5, 6];
// |1|2|3|4|5|6|
// 0 1 2 3 4 5 6

function sliceArray(list, n, m) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let el = list[i];
    if (i >= n && i < m) {
      result.push(el);
    }
  }

  return result;
}

function sliceOriginal(list, n, m) {
  let result = list.slice(n, m);
  return result;
}

let result1 = sliceArray(numbers, 1, 4);
let result2 = sliceOriginal(numbers, 1, 4);

console.log(result1, result2);
