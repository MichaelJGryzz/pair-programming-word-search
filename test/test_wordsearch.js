const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'L', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'Y', 'I', 'N', 'F', 'E', 'L', 'G'],
      ['Y', 'F', 'G', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'H', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'T', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'H', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'O', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'U', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'S', 'F', 'K', 'U', 'A', 'L'],
      ['J', 'X', 'E', 'W', 'Q', 'I', 'D', 'M'],
    ], 'LIGHTHOUSE');

    assert.isTrue(result);
  });

  it("should return false if the word matrix is an empty array", function() {
    const result = wordSearch([
      [],
    ], 'MICHAEL');

    assert.isFalse(result);
  });
});
