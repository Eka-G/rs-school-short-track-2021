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
  const res = arr.map((x) => (x !== -1 ? ' ' : -1));
  const sortArr = arr.filter((x) => x !== -1).sort((current, next) => current - next);

  sortArr.forEach((item) => {
    const i = res.findIndex((x) => x === ' ');
    res[i] = item;
  });

  return res;
}

module.exports = sortByHeight;
