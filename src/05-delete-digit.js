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
  let res = '';
  const num = String(n).split('');

  for (let i = 0; i < num.length - 1; i++) {
    if (+num[i] < +num[i + 1]) {
      res += num.slice(i + 1).join('');
      break;
    } else {
      res += num[i];
    }
  }

  return +res;
}

module.exports = deleteDigit;
