const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = String(n).split('').map(v => parseInt(v, 10));
  const maxNumber = Math.max(...arr)
  const indexMaxNum = arr.indexOf(maxNumber)
  if (indexMaxNum === 1){
    arr.shift()
    return +arr.join('')
  }else{
    const minNumber = Math.min(...arr)
    arr.splice(arr.indexOf(minNumber), 1)
    return +arr.join('')
  }
}

module.exports = {
  deleteDigit
};
