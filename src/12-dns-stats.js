/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  const valueCounter = [];

  domains.forEach((item) => {
    const arr = item.split('.').reverse();
    arr.forEach((part) => valueCounter.push(part));
  });

  domains.forEach((item, index) => {
    const parts = item.split('.').reverse();
    let key = '';

    if (index === 0) {
      const startKey = `.${parts[0]}`;
      res[startKey] = valueCounter.filter((j) => j === parts[parts.length - 1]).length;
    }

    parts.forEach((x) => { key += `.${x}`; });

    res[key] = valueCounter.filter((j) => j === parts[parts.length - 1]).length;
  });

  return res;
}

module.exports = getDNSStats;
