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
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let disNext = '--discard-next';
  let disPrev = '--discard-prev';
  let doubNext = '--double-next';
  let doubPrev = '--double-prev';
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    result.push(item);

    if (item === disNext) {
      if (arr[i + 1]) i += 2;
    }

    else if (item === disPrev ) {
      if (arr[i - 1]) {
        result.pop();
        result.pop();
      }
    }

    else if (item === doubNext) {
      if (arr[i + 1]) result.push(arr[i + 1]);
    } 

    else if (item === doubPrev) {
      if (arr[i - 1]) result.push(arr[i - 1]);
    }
  }

  return result.filter(item => item !== disNext && item !== disPrev && item !== doubNext && item !== doubPrev);
}
module.exports = {
  transform
};
