const { NotImplementedError } = require('../extensions/index.js');

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
  const arr = str.split('')
  let count = 1
  let res = []

  for (let i = 0; i < arr.length; i++) {
    let j = 1
    while (arr[i] === arr[i + j]) {
      count++
      j++
    }
    i += j - 1
    if(count!=1) res.push(count)
    res.push(arr[i])
    count = 1
  }
  return res.join('')
}

module.exports = {
  encodeLine
};
