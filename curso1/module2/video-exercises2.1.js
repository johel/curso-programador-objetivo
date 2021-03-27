// 1. Criar uma função que imprime os elementos de uma lista;
function printList(list) {
  for (let i = 0; i < list.length; i++) {
    let el = list[i];
    console.log(el);
  }
}

// 2. Criar uma função que imprime de trás para frente
// os elementos de uma lista
function printReservedList(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }
}

// 3. Criar uma função que imprime os elementos de uma lista
// saltando dois elementos a cada iteração
// ex: imprimeSaltando2([1,2,3,4,5]) => imprime 1 e 4

function imprimeSaltando2(list) {
  for (let i = 0; i < list.length; i = i + 3) {
    let el = list[i];
    console.log(el);
  }
}

// 4. Criar uma função que imprime os elementos de uma lista
// saltando a quantidade de elementos que você especificar, como parâmetro
// ex: imprimeSaltandoN([1,2,3,4,5], 1) => imprime 1 3 e 5

function imprimeSaltandoN(list, jumpSize) {
  for (let i = 0; i < list.length; i = i + jumpSize + 1) {
    let el = list[i];
    console.log(el);
  }
}

// 5. Criar uma função que imprime os elementos de uma lista
// saltando a quantidade de elementos que você especificar
// e começando do índice que você especificar
// ex: imprimeSaltandoNComecandoAPartir([1,2,3,4,5], 1, 2) => imprime 3 e 5
// ex: imprimeSaltandoNComecandoAPartir([1,2,3,4,5], 0, 3) => imprime 4 e 5
// ex: imprimeSaltandoNComecandoAPartir([1,2,3,4,5], 1, 4) => imprime 5

function imprimeSaltandoNComecandoAPartir(list, jumpSize, initialIndex) {
  for (let i = initialIndex; i < list.length; i = i + jumpSize + 1) {
    let el = list[i];
    console.log(el);
  }
}
