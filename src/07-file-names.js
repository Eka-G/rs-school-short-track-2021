/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = names.map((item) => item);

  res.forEach((item, i) => {
    let index = res.indexOf(item, i + 1);
    if (index > 0) {
      for (let j = 1; j <= res.filter((x) => x === item).length; j++) {
        res[index] += `(${j})`;
        index = res.indexOf(item, index);
      }
    }
  });

  return res;
}

module.exports = renameFiles;
