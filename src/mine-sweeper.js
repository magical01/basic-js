const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {

  const xMax = matrix[0].length;
  const yMax = matrix.length;

  function mineAt(x, y) {
    if (x >= 0 && x < xMax && y >= 0 && y < yMax) return Number(matrix[y][x]);
    else return 0;
  }

  function sumAt(cx, cy) {
    let sum = 0;
    for(let x = cx - 1; x <= cx + 1; x++) {
      for (let y = cy - 1; y <= cy + 1; y++) {
        if (x == cx && y == cy) continue;
        sum += mineAt(x, y);
      }
    }
    return sum;
  }

  let sumMatrix = Array(yMax);
  for (let y = 0; y < yMax; y++) {
    sumMatrix[y] = new Array(xMax);
    for (let x = 0; x < xMax; x++) {
      sumMatrix[y][x] = sumAt(x, y);
    }
  }
  return sumMatrix;
}
module.exports = {
  minesweeper
};
