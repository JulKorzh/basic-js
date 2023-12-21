const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function createSrt(repeat, text, sep) {
    let arr = []
    let i = 0
    while (i < repeat) {
      arr.push(text)
      i++
    }
    return arr.join(sep)
  }

  //if(typeof str != 'string') str.toString();
  if (options.addition === null) options.addition = 'null';

  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';

  let text = str + createSrt(options.additionRepeatTimes, options.addition, options.additionSeparator)
  return createSrt(options.repeatTimes, text, options.separator)
}

module.exports = {
  repeater
};
