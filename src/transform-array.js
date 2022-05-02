const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


function transform(arr) {
  let nArr = [];
  nArr = arr.slice([0]);
  if (!Array.isArray(nArr)) throw new Error( `'arr' parameter must be an instance of the Array!`);
  if (Array.isArray(nArr)) {
      for (let i = 0; i < nArr.length; i++) {
        if (nArr[0] == "--discard-prev" || nArr[0] =='--double-prev') {
          nArr.splice(0, 1);
        }
        if(nArr[nArr.length-1]=='--double-next' || nArr[nArr.length-1]=='--discard-next'){
          nArr.splice(nArr.length-1, 1);
        }
        if(nArr[i]=='--discard-next' && nArr[i+2]=='--double-prev'){
          nArr.splice(i, 3);
        }
        if(nArr[i]=='--discard-next' && nArr[i+2]=='--discard-prev'){
          nArr.splice(i, 3);
        }
        if (nArr[i] == "--discard-prev") {
          nArr.splice(i - 1, 2);
        }
        if (nArr[i] == "--double-next") {
          nArr[i] = nArr[i + 1];
        }
        if (nArr[i] == `--discard-next`) {
          nArr.splice(i, 2);
        }
        if (nArr[i] == `--double-prev`) {
          nArr[i] = nArr[i - 1];
        } 
      }return nArr;
      
    }
  throw new Error( `'arr' parameter must be an instance of the Array!`);  
  }



module.exports = {
  transform
};
