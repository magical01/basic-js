const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
   
  function splice(str, start, count = 1) {
    return str.substring(0, start) + str.substring(start + count, str.length);
  }

  const str = String(n);
  let max = 0
  for (let i = 0; i <  str.length; i++) {
    let value = Number(splice(str, i, 1));
    if (value > max) {
      max = value;
    }
  }
  return max
}

module.exports = {
  deleteDigit
};
