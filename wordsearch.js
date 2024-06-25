const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const numRows = letters.length;
  const numColumns = letters[0].length;
  let verticalJoin = Array(numColumns).fill('');
  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numColumns; column++) {
      verticalJoin[column] += letters[row][column];
    }
  }
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;