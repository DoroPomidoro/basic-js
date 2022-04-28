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
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix[0][i].length; j++) {
      if (matrix[0][j] === "^^") {
        ++counter
      }
    }
  };
  return counter;
};

function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
