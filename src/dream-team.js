const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = '';
  if (!Array.isArray(members)) return false;

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      teamName += members[i].trim().charAt(0).toUpperCase();
    }    
  }
  return teamName.split('').sort().join('');
};
