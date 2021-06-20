const shiftedDiff = (first, second) => {
  // we could sort the word to see if they have the same letters count, but length is ok for now
  if (hasWordsDifferentLengths(first, second)) {
    return -1;
  }

  if (first === second) {
    return 0;
  }

  return shiftedDiffRegular(first, second);
};

function shiftedDiffRegular(first, second) {
  let result = -1;
  let count = 1;
  let rotatedWord = first;
  while (count < first.length) {
    rotatedWord = rotateRight(rotatedWord);
    if (rotatedWord === second) {
      result = count;
      break;
    }
    count++;
  }

  return result;
}

function hasWordsDifferentLengths(first, second) {
  return first.length !== second.length;
}

function rotateRight(word) {
  const lastLetter = word[word.length - 1];
  // if slice is not a performance wise solution we can refactor it later;
  const result = lastLetter + word.slice(0, word.length - 1);
  return result;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("shiftedDiff", () => {
  it("should be case sensitive", () => {
    assert.equal(shiftedDiff("Moose", "moose"), -1);
  });

  it("should return 0 for identical words", () => {
    assert.equal(shiftedDiff("Esham", "Esham"), 0);
  });

  it("should work on basic tests", () => {
    assert.equal(shiftedDiff("eecoff", "coffee"), 4);
    assert.equal(shiftedDiff("isn't", "'tisn"), 2);
    assert.equal(shiftedDiff(" ", " "), 0);
    assert.equal(shiftedDiff("hoop", "pooh"), -1);
    assert.equal(shiftedDiff("  ", " "), -1);
  });
});
