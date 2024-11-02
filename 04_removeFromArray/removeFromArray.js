const removeFromArray = function(arr, ...values) {
  let position = '';
  
  for (value of values) {
    while (arr.includes(value)) {
      position = arr.indexOf(value);
      arr.splice(position,1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
