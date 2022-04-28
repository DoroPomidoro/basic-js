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
// function createDreamTeam(members) {
//   let finalArray = [];
//   let firstLetter = [];
//   let arrWithoutWhitespaces = []
//   let sortedMembers;
//   if(typeof members !== "object" && ) {
//     return false; 
//   } else {
//   for (let i = 0; i < members.length; i++) {
//     if (typeof members[i] !== "string") {
//       return false;
//     } else {
//      arrWithoutWhitespaces = members[i].split('');
//      for (let j = 0; j < arrWithoutWhitespaces.length; j++) {
//        if (arrWithoutWhitespaces[j] === ' ') {
//          continue
//        } else {
//          firstLetter.push(arrWithoutWhitespaces[j])
//        }
//      }
//      sortedMembers = firstLetter.join('').charAt(0).toUpperCase();
//      finalArray.push(sortedMembers);
//      firstLetter = [];
//     }
//   }
  
//   return finalArray.sort().join('');
// }
// }
// asdasd
function createDreamTeam(members) {
  let finalArray = [];
  let firstLetter = [];
  let arrWithoutWhitespaces = []
  let sortedMembers;
    if (members==null){
      return false;
     } else {
    for (let i = 0; i < members.length; i++) {
      if ((typeof members[i] !== "string" || typeof members[i] === "undefined")) {
        delete members[i]
      } else {
       arrWithoutWhitespaces = members[i].split('');
       for (let j = 0; j < arrWithoutWhitespaces.length; j++) {
         if (arrWithoutWhitespaces[j] === ' ') {
           continue
         } else {
           firstLetter.push(arrWithoutWhitespaces[j])
         }
       }
       sortedMembers = firstLetter.join('').charAt(0).toUpperCase();
       finalArray.push(sortedMembers);
       firstLetter = [];
      }
    }
    
    return finalArray.sort().join('');
  }
}

module.exports = {
  createDreamTeam
};
