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
  let res = '';
  let count = 1;

  str.split('').forEach((item, i, arr) => {
    if (item === arr[i + 1]) {
      count++;
    }

    if (item !== arr[i + 1]) {
      if (count > 1) {
        res += count + item;
      } else {
        res += item;
      }
      count = 1;
    }
  });

  return res;
}

module.exports = encodeLine;
