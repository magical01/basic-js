const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {

  function removeCharAt(str, ind) {
    return str.substring(0, ind) + str.substring(ind + 1, str.length);
  }

  let count = 0;
  for(let i = 0; i < s1.length; i++) {
    let char = s1[i];
    let index = s2.indexOf(char);
    // found
    if(index >= 0) {
      s2 = removeCharAt(s2, index);
      count++;
    }
    console.log(char, s2);
  }
  return count;

}

module.exports = {
  getCommonCharacterCount
};
