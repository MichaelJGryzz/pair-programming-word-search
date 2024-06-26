const wordSearch = (letters, word) => {
  // check if the letters array or if the first row is empty, if so immediately return false;
  if (!letters.length || !letters[0].length) return false;
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // initialize an array to store the vertical strings
  const numRows = letters.length;
  const numColumns = letters[0].length;
  let verticalJoin = Array(numColumns).fill('');
  // iterate through each column and construct vertical strings
  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numColumns; column++) {
      verticalJoin[column] += letters[row][column];
    }
  }
  // check each vertical string for the presence of the given word
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  // if the word is not found horizontally or vetically, return false
  return false;
};

module.exports = wordSearch;