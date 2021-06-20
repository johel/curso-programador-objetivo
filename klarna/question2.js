function orderWeight(text) {
  let result = text
    .split(" ")
    .filter((a) => Number.isInteger(Number(a)) && Number(a) > 0)
    .sort(compareTextNumberWeight)
    .join(" ");

  return result;
}

function compareTextNumberWeight(txtN1, txtN2) {
  if (sumTextNumbers(txtN1) > sumTextNumbers(txtN2)) {
    return 1;
  }

  if (sumTextNumbers(txtN1) < sumTextNumbers(txtN2)) {
    return -1;
  }

  if (txtN1 > txtN2) {
    return 1;
  } else {
    return -1;
  }

  return 0;
}

function sumTextNumbers(txt) {
  return txt
    .split("")
    .map((l) => parseInt(l))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}

// ------------

let assert = require("chai").assert;
let expect = require("chai").expect;

describe("calculate string weight", function () {
  it("works by summing numbers", function () {
    assert.equal(sumTextNumbers("123"), 6);
  });

  it("works fine with zero", function () {
    assert.equal(sumTextNumbers("01203"), 6);
  });
});

describe("compareTextNumberWeight", function () {
  it("sorts string numbers with different weights appropriately", function () {
    let arr = ["99", "001", "33"];
    arr.sort(compareTextNumberWeight);
    expect(arr).to.eql(["001", "33", "99"]);
  });

  it("defaults to normal string comparison when number have the same weight", function () {
    let arr = ["02", "002", "011", "81", "18"];
    arr.sort(compareTextNumberWeight);
    expect(arr).to.eql(["002", "011", "02", "18", "81"]);
  });
});

describe("Order Weights", function () {
  it("basic tests", function () {
    assert.equal(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
    assert.equal(
      orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
      "11 11 2000 10003 22 123 1234000 44444444 9999"
    );
  });

  it("should filter not positive integer strings", function () {
    assert.equal(orderWeight("-1000 a 123 44.44 99 2000"), "2000 123 99");
  });
});
