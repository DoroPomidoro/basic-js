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
// function getSeason(date) {
//   if(!date) {
//     return 'Unable to determine the time of year!'
//   } else {
//     if ((Object.prototype.toString.call(date) === '[object Date]') || (Object.getOwnPropertySymbols(date).length !== 0 )) {
//       let month = date.getMonth();
//       if (month === 0 || month === 1 || month === 11) {
//         return "winter"
//       } else if (month === 2 || month === 3 || month === 4) {
//         return "spring" 
//       } else if (month === 5 || month === 6 || month === 7) {
//         return "summer"
//       } else if (month === 8 || month === 9 || month === 10) {
//         return "autumn"
//       } else {      
//       return 'Unable to determine the time of year!';
//       }
//     } else {
//       throw new Error("Invalid date!");
//     }
//   }
// }



function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!'; 
  } else {
    if ((Object.prototype.toString.call(date) === '[object Date]') && (Object.getOwnPropertySymbols(date).length === 0)) {
      let month = date.getMonth();
      if (month === 0 || month === 1 || month === 11) {
        return "winter";
      } else if (month === 2 || month === 3 || month === 4) {
        return "spring" 
      } else if (month === 5 || month === 6 || month === 7) {
        return "summer"
      } else if (month === 8 || month === 9 || month === 10) {
        return "autumn"
      } 
    } else {
      throw new Error("Invalid date!");
    }
  }
} 

//correct version
// function getSeason(date) {
//   if(!date) {
//     return 'Unable to determine the time of year!'
//   } else {
//     if (Object.prototype.toString.call(date) !== '[object Date]' || Object.getOwnPropertySymbols(date).length !== 0)  throw new Error("Invalid date!") //test tricky and very tricky, 
//  //Object.getOwnPropertySymbols(date).length !== 0 need check above this string, it's very important! really!     
//       let month = date.getMonth();
//       if (month === 0 || month === 1 || month === 11) {
//         return "winter"
//       } else if (month === 2 || month === 3 || month === 4) {
//         return "spring" 
//       } else if (month === 5 || month === 6 || month === 7) {
//         return "summer"
//       } else if (month === 8 || month === 9 || month === 10) {
//         return "autumn"
//       } else {      
//       return 'Unable to determine the time of year!';
//       }
//     } 
//   }


module.exports = {
  getSeason
};
