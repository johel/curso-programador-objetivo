// Problema 1 - Adivinhe o que imprime quando se invoca a função;

function printThis() {
  var list = [3, 0, 3];
  console.log(list[0]);
  console.log(list[1]);
  console.log(list[2]);
  console.log(list[3]);
}

// Problema 2 - Adivinhe o que imprime printListElements([3,0,3,10])
function printListElements(list) {
  for (var i = 0; list < i.length; i = i + 1) {
    console.log(list[i]);
  }
}

// Problema 3 - Adivinhe o que imprime printListElements2([3,0,3,10])
function printListElements2(list) {
  for (var i = list.length - 1; i >= 0; i = i - 1) {
    console.log(list[i]);
  }
}

// Problema 4 - Adivinhe o que imprime printListElements3([3,0,3,10])
function printListElements3(list) {
  for (var i = 0; i < list.length; i = i + 1) {
    console.log(i);
  }

  console.log("valor final do i", i);
}

// Problema 5 - Adivinhe o que imprime printListElements4([3,0,3,10])
function printListElements4(list) {
  for (var i = 0; i < list.length; i = i + 1) {
    if (list[i] % 2 === 0) {
      console.log(list[i]);
    }
  }
}

// Problema 6 - Adivinhe o que imprime printListElements5([3,0,3,10])
function printListElements5(list) {
  for (var i = 0; i < list.length; i = i + 1) {
    if (list[i] % 2 !== 0) {
      console.log(list[i]);
    }
  }
}

// Problema 7 - Adivinhe o que imprime printListElements6([3,0,3,10])
function printListElements6(list) {
  for (var i = 0; i < list.length; i = i + 1) {
    if (!(list[i] % 2 === 0)) {
      console.log(list[i]);
    }
  }
}

// Problema 8 - Adivinhe o que imprime printListElements7([3,0,3,10])
function printListElements7(list) {
  function ehPar(n) {
    return n % 2 === 0;
  }

  for (var i = 0; i < list.length; i = i + 1) {
    if (!ehPar(list[i])) {
      console.log(list[i]);
    }
  }
}

// Problema 8.5; Verifique o que imprime push()

function push() {
  var a = [];
  a.push(1);
  console.log(a);
  a.push(2);
  console.log(a);
  a[0] = 3;
  console.log(a);
}

// Problema 9 - Adivinhe o que imprime console.log(doSomething([3,0,3,10]))
function doSomething(list) {
  function ehPar(n) {
    return n % 2 === 0;
  }

  function ehImpar(n) {
    return n % 2 !== 0;
  }

  var result = [];

  for (var i = 0; i < list.length; i++) {
    if (ehPar(list[i]) && ehImpar(list[i])) {
      result.push(list[i]);
    }
  }

  return result;
}

// Problema 10 - Adivinhe o que imprime console.log(doSomething([3,0,3,10]))
function doSomething(list) {
  function ehPar(n) {
    return n % 2 === 0;
  }

  function ehImpar(n) {
    return n % 2 !== 0;
  }

  var result = [];

  for (var i = 0; i < list.length; i++) {
    if (ehPar(list[i]) || ehImpar(list[i])) {
      result.push(list[i]);
    }
  }

  return result;
}

// Problema 11 - Adivinhe o que imprime console.log(doSomething1([3,0,3,10, 6, 2]))
function doSomething1(list) {
  var result = 0;
  for (var i = 0; i < list.length; i++) {
    result = result + list[i];
  }

  return result;
}

// Problema 12 - Adivinhe o que imprime console.log(doSomething2([3,0,3,10, 6, 2]))
function doSomething2(list) {
  var result = 0;
  for (var i = 0; i < list.length; i++) {
    result += list[i];
  }

  return result;
}

// Problema 13 - Adivinhe o que imprime console.log(doSomething3([3,0,3,10, 6, 2]))
function doSomething3(list) {
  var result = 0;
  for (var i = 0; i < list.length; i++) {
    result -= list[i];
  }

  return result;
}

// Problema 14 - Adivinhe o que imprime console.log(doSomething4([3,0,3,10, 6, 2]))
function doSomething4(list) {
  var result = 1;
  for (var i = 0; i < list.length; i++) {
    result = result * list[i];
  }

  return result;
}

// Problema 15 - Adivinhe o que imprime console.log(doSomething5([3,0,3,10]))
// Que nome daria à função?
function doSomething5(list) {
  var result = 1;
  for (var i = 0; i < list.length; i++) {
    result = result * list[i];
  }

  return result;
}

// Problema 16 - Adivinhe o que imprime console.log(doSomething6([3,1,3,10,2,6]));
function doSomething6(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    var el = list[i];
    if (el % 2 === 0 && el % 3 === 0) {
      result.push("c");
    } else if (el % 3 === 0) {
      result.push("b");
    } else if (el % 2 === 0) {
      result.push("a");
    }
  }

  return result;
}

// Problema 17 - Adivinhe o que imprime console.log(doSomething7([3,1,3,10,2,6]));
function doSomething7(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    var el = list[i];
    if (el % 2 === 0) {
      result.push("a");
    } else if (el % 3 === 0) {
      result.push("b");
    } else if (el % 2 === 0 && el % 3 === 0) {
      result.push("c");
    }
  }

  return result;
}

// Problema 18 - Adivinhe o que imprime console.log(doSomething8([3,1,3,10,2,6]));
function doSomething8(list) {
  var result = {
    divisivelPor6: 0,
    divisivelPor3MasNaoPor6: 0,
    divisivelPor2MasNaoPor6: 0,
  };
  for (var i = 0; i < list.length; i++) {
    var el = list[i];
    if (el % 2 === 0 && el % 3 === 0) {
      result.divisivelPor6 = result.divisivelPor6 + 1;
    } else if (el % 3 === 0) {
      result.divisivelPor3MasNaoPor6 = result.divisivelPor3MasNaoPor6 + 1;
    } else if (el % 2 === 0) {
      result.divisivelPor2MasNaoPor6 = result.divisivelPor2MasNaoPor6 + 1;
    }
  }

  return result;
}

// Problema 19 - Adivinhe o que imprime console.log(doSomething9([3,1,3,10,2,6]));
function doSomething9(list) {
  var result = {
    divisivelPor6: 0,
    divisivelPor3: 0,
    divisivelPor2: 0,
  };
  for (var i = 0; i < list.length; i++) {
    var el = list[i];

    if (el % 2 === 0 && el % 3 === 0) {
      result.divisivelPor6 = result.divisivelPor6 + 1;
    }

    if (el % 3 === 0) {
      result.divisivelPor3 = result.divisivelPor3 + 1;
    }

    if (el % 2 === 0) {
      result.divisivelPor2 = result.divisivelPor2 + 1;
    }
  }

  return result;
}

// Problema 20 - Adivinhe o que imprime console.log(doSomething20([ [1,2,3], [1,10] ]));
function doSomething20(listOfLists) {
  var result = [];
  for (var i = 0; i < listOfLists.length; i++) {
    var list = listOfLists[i];
    for (var j = 0; j < list.length; j++) {
      result.push(list[j]);
    }
  }

  return result;
}

// Problema 21 - Adivinhe o que imprime console.log(doSomething21([ [1,2,3], [1,10] ]));
function doSomething21(listOfLists) {
  var result = [];
  for (var i = 0; i < listOfLists.length; i++) {
    for (var j = 0; j < listOfLists[i].length; j++) {
      result.push(listOfLists[i][j]);
    }
  }

  return result;
}

// Problema 22 - Adivinhe o que imprime console.log(doSomething22([ [1,2,3], [1,10] ]));
function doSomething22(listOfLists) {
  var result = 0;
  for (var i = 0; i < listOfLists.length; i++) {
    var list = listOfLists[i];
    for (var j = 0; j < list.length; j++) {
      result = result + list[j];
    }
  }

  return result;
}

// Problema 23 - Adivinhe o que imprime console.log( doSomething23([2,3,7,1]) );
function doSomething23(list) {
  var result = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] > result) {
      result = list[i];
    }
  }

  return result;
}

// Problema 24 - Adivinhe o que imprime console.log( doSomething24([2,3,7,1]) );
function doSomething24(list) {
  var result = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] < result) {
      result = list[i];
    }
  }

  return result;
}

// Problema 25 - Adivinhe o que imprime console.log( doSomething25([2,3,7,1]) );
function doSomething25(list) {
  for (var i = 0; i < list.length; i++) {
    list[i] = list[i] * 2;
  }

  return list;
}

// Problema 26 - Adivinhe o que imprime console.log( doSomething26([2,3,7,1]) );
function doSomething26(list) {
  for (var i = 0; i < list.length; i++) {
    var el = list[i];
    el = el * 2;
  }

  return list;
}

// Problema 27 - Adivinhe o que imprime console.log( doSomething27([2,3,7,1]) );
function doSomething27(list) {
  for (var i = 0; i < list.length; i++) {
    var el = list[i];
    list[i] = el * 2;
  }

  return list;
}

// Problema 28 - Adivinhe o que imprime console.log( doSomething28([2,3,7,1]) );
function doSomething28(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    result.push(list[i] * 2);
  }

  return result;
}

// Problema 29 - Adivinhe o que imprime console.log( doSomething29([2,3,7,1]) );
function multiplyByTwo(el) {
  return el * 2;
}

function doSomething29(list, multiplyByTwo) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    result.push(multiplyByTwo(list[i]));
  }

  return result;
}

// Problema 30 - Adivinhe o que imprime console.log( doSomething30([2,3,7,1]) );
function doSomething30(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] > 2) {
      result.push(list[i]);
    }
  }

  return result;
}

// Problema 31 - Adivinhe o que imprime console.log( doSomething31([2,3,7,1]) );
function doSomething31(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] > 2) {
      result.push(list[i]);
      break;
    }
  }

  return result;
}

// Problema 32 - Adivinhe o que imprime console.log( doSomething32([2,3,7,1]) );
function doSomething32(list) {
  var result;
  for (var i = 0; i < list.length; i++) {
    if (list[i] > 2) {
      result = list[i];
      break;
    }
  }

  return result;
}

// Problema 33 - Adivinhe o que imprime console.log( doSomething33([2,3,7,1]) );
function doSomething33(list) {
  var result;
  for (var i = 0; i < list.length; i++) {
    if (list[i] > 100) {
      result = list[i];
      break;
    }
  }

  return result;
}
