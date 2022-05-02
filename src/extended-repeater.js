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
  let rT, sPRTR, aDD, aRT, aDDsPRTR, adderator, add;

  if(options.hasOwnProperty('repeatTimes')) {
    rT = options.repeatTimes;
  } else {
    rT = 1;
  };

  if(options.hasOwnProperty('separator')){
    sPRTR = options.separator;
  } else {
    sPRTR = "+";
  };

  if(options.hasOwnProperty('addition')){
    aDD = options.addition;
  } else {
    aDD = "";
  };
  
  if(options.hasOwnProperty('additionRepeatTimes')){
    aRT = options.additionRepeatTimes;
  } else {
    aRT = ''; 
  };

  if(options.hasOwnProperty('additionSeparator')){
    aDDsPRTR = options.additionSeparator;
    if(aRT != '') {
      adderator = ((aDD + aDDsPRTR).repeat(aRT));
      add = adderator.substring(0, adderator.length - aDDsPRTR.length);
      } else {
        adderator = aDD + aDDsPRTR;
        add = adderator.substring(0, adderator.length - aDDsPRTR.length);
      };   
  } else {
    aDDsPRTR = '|';
    adderator = ((aDD + aDDsPRTR).repeat(aRT));
    add = adderator.substring(0, adderator.length - aDDsPRTR.length);
  };

  let result = (str + add + sPRTR).repeat(rT);
  return result.substring(0, result.length - sPRTR.length)
};
module.exports = {
  repeater
};
