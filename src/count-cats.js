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
 function countCats(arr) {
  let number = 0;
  let newArr = arr.flat();
  for (let elem of newArr) {
    if (elem === '^^') {
      number++
    }
  }
  return number;
}

module.exports = {
  countCats
};
