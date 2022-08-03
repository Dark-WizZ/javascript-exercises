const add = function(i, j) {
	return i+j;
};

const subtract = function(i, j) {
	return i-j;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a+b , 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a*b, 1);
};

const power = function(i, e) {
	return i**e;
};

const factorial = function(num) {
  return (num!=0)? Array.from(new Array(num), (x,i)=>i+1).reduce((a,b) => a*b, 1): 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
