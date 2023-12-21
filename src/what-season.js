const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date = 'Error'*/) {
  throw new NotImplementedError('Not implemented');
  //if(arguments === 'Error') return 'Unable to determine the time of year!'
  //if (typeof date != 'object') return 'Invalid date!'
  //if (date.getMonth() < 2) return 'winter';
  //if (date.getMonth() < 5 ) return 'spring';
 // if (date.getMonth() < 8) return 'summer';
 // if (date.getMonth() < 11) return 'autumn';
//return 'winter';
}

module.exports = {
  getSeason
};
