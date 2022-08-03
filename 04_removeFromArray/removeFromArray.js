const removeFromArray = function(arr, ...val) {
  return arr.filter(i => !val.includes(i))
};

// Do not edit below this line
module.exports = removeFromArray;
