const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let indexes = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == -1) {
      indexes.push(i);
    }
  }
  arr = arr.sort((a, b) => a - b).slice(indexes.length, arr.length);
  for (let i = 0; i < indexes.length; i++) {
    let index = indexes[i];
    arr.splice(index, 0, -1);
  }
  return arr;
}


module.exports = {
  sortByHeight
};
