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
  if (s1 === '' || s2 === '') return 0;

  const copyS1 = s1.split('').sort().join('');
  let lastIndex = 0;
  let res = 0;

  s2.split('').sort().forEach((item) => {
    const matchIndex = copyS1.indexOf(item, lastIndex);
    if (matchIndex !== -1) {
      lastIndex = matchIndex + 1;
      res++;
    }
  });

  return res;
}

module.exports = getCommonCharacterCount;
