const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let counter = 0;
  for (let i = 1; matrix[0].length; i++) {
    for (let j = 1; j < matrix[0][i]; j++) {
      if (matrix[0][i] === "^^") {
        counter++
      }
    }
  }
  return counter;
}

module.exports = {
  countCats
};
