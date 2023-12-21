const { NotImplementedError } = require('../extensions/index.js');

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
  let obj = {};
  const domArr = domains.map(v => v.split('.').reverse()).sort((a, b) => {
    return a.length - b.length
  })

  for (let k = 0; k < domArr.length; k++) {
    let val = ''
    for (let j = 0; j < domArr[k].length; j++) {
      let v = domArr[k][j]
      let count = 0
      for (let i = 0; i < domArr.length; i++) {
        if (domArr[i][j] === v) {
          count++
        }
      }
      val = val + '.' + v
      obj[val] = count
    }
  }

  return obj
}

module.exports = {
  getDNSStats
};
