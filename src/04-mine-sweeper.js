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
function check(num, length) {
  let res = num;
  if (num < 0) res = 0;
  if (num >= length) res = (length - 1);
  return res;
}

function minesweeper(matrix) {
  // make empty array same size with matrix
  const res = new Array(matrix.length)
    .fill(null)
    .map(() => new Array(matrix[0].length));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const maxTop = check((i - 1), matrix.length);
      const maxBottom = check((i + 1), matrix.length);
      const maxLeft = check((j - 1), matrix[i].length);
      const maxRight = check((j + 1), matrix[i].length);
      let count = 0;

      for (let f = maxTop; f <= maxBottom; f++) {
        for (let g = maxLeft; g <= maxRight; g++) {
          if (matrix[f][g]) count++;
        }
      }

      res[i][j] = matrix[i][j] ? (count - 1) : count;
    }
  }

  return res;
}

module.exports = minesweeper;
