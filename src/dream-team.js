const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let firstLetter = []
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      firstLetter.push(members[i].trim().toUpperCase().substring(0, 1))
    }
  }
  return firstLetter.sort((num1, num2) => {
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;

  }).join('');
}


module.exports = {
  createDreamTeam
};
