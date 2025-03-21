const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 } 4308 - 60s
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const minTurns = 2 ** disksNumber - 1;
  const minTime = Math.floor((minTurns * 3600) / turnsSpeed);
  return {'turns': minTurns, 'seconds': minTime}
}

module.exports = {
  calculateHanoi
};
