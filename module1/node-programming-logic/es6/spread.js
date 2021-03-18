function sumAntigo() {
  console.log(arguments);
}

function sum(...numeros) {
  let result = 0;
  for (let i = 0; i < numeros.length; i++) {
    const el = numeros[i];
    result = result + el;
  }

  return result;
}

(numeros) => [[2, 4, 6, 8, 10, 12, 14]];

// sum(1, 2, 3, 4, 5);
// sum(1, 2, 3, 4);
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const numerosPares = [2, 4, 6, 8, 10, 12, 14];
// sum(...numerosPares); // sum(2,4,6,10,12,14)

// spread Operator em Array
console.log(...[1, 2, 3]);

// spread para concentrar argumentos em um array
function concetraArgumentosEmUmArray(...list) {
  console.log(list);
}

function concetraArgumentosEmUmArray2(firstParam, ...rest) {
  console.log(firstParam);
  console.log(rest);
}

// function concetraArgumentosErrado(...rest, last) {
//   // Rest parameter must be last formal parameter
//   console.log(rest);
//   console.log(last);
// }

// concetraArgumentosEmUmArray(1, 2, 3, 4);

// concetraArgumentosEmUmArray2(1, 2, 3, 4);

// concetraArgumentosErrado(1,2,3,4);

function multiplyElements(list) {
  let result = 1;
  for (let i = 0; i < list.length; i++) {
    result = result * list[i];
  }

  return result;
}

function multiplyParams(...params) {
  const result = multiplyElements(params);
  return result;
}
// multiplyParams(3) => 3
// multiplyParams(3, 6) => 18
multiplyParams(3, 6, 2);
