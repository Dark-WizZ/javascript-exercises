const palindromes = function (str) {
  let sorted = str.toLowerCase().split('').filter(s => s>='a' && s<='z');
  for(let i=0; i<sorted.length/2; i++){
    if(sorted[i]!=sorted[sorted.length-i-1]) return false
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
