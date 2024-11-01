const reverseString = function(string) {
  // break up text into array into a new variable
  const word = string.split("");

  // reverse array (changes original array so no need to store in new variable)
  word.reverse();

  // join array and return result
  return word.join("");

};

// Do not edit below this line
module.exports = reverseString;
