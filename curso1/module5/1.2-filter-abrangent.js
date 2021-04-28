function filterGeneralMultipleOfN(anyArray, n) {
  function isElementMultipleOfN(element, positiveInteger) {
    return element % positiveInteger === 0;
  }

  let result = [];
  for (let i = 0; i < anyArray.length; i++) {
    let el = anyArray[i];
    if (isElementMultipleOfN(el, n)) {
      result.push(el);
    }
  }

  return result;
}

function isElementMultipleOfN(element, positiveInteger) {
  return element % positiveInteger === 0;
}

function isElementGreaterThanN(element, positiveInteger) {
  return element > positiveInteger;
}

function isElementLessThanN(element, positiveInteger) {
  return element < positiveInteger;
}

function filterMoreGeneralOfN(anyArray, n, filterElement) {
  let result = [];
  for (let i = 0; i < anyArray.length; i++) {
    let el = anyArray[i];
    if (filterElement(el, n)) {
      result.push(el);
    }
  }

  return result;
}

filterMoreGeneralOfN([1, 2, 6, 7], 3, isElementMultipleOfN);

filterMoreGeneralOfN([1, 2, 6, 7], 3, isElementGreaterThanN);

filterMoreGeneralOfN([1, 2, 6, 7], 6, isElementLessThanN);
