function filterVerySpecificMultipleOfTwo() {
  let specificArray = [1, 3, 5, 2];
  let result = [];
  for (let i = 0; i < specificArray.length; i++) {
    let el = specificArray[i];
    if (el % 2 === 0) {
      result.push(el);
    }
  }

  return result;
}

filterVerySpecificMultipleOfTwo();

function filterSpecificMultipleOfTwo(anyArray) {
  let result = [];
  for (let i = 0; i < anyArray.length; i++) {
    let el = anyArray[i];
    if (el % 2 === 0) {
      result.push(el);
    }
  }

  return result;
}

filterSpecificMultipleOfTwo([1, 493854, 3, 5, 2]);

function filterGeneralMultipleOfN(anyArray, n) {
  let result = [];
  for (let i = 0; i < anyArray.length; i++) {
    let el = anyArray[i];
    if (el % n === 0) {
      result.push(el);
    }
  }

  return result;
}

filterGeneralMultipleOfN([1, 3, 5, 2], 2);
