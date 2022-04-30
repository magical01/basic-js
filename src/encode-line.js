const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [];
  let count = 1;
  let encode = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++
    } else {
      arr.push([count, str[i]]);
      count = 1;
    }
  
  }
  let newStr = arr.join();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] != ',') {
      encode += newStr[i]
    }
  }
  return encode.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
