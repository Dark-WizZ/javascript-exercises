const fibonacci = function(n) {
  if (n<=0) return 'OOPS';
  let prepre = 0;
  let pre = 1;
  for(let i=1; i<n; i++){
    let temp = pre;
    pre = pre+prepre;
    prepre = temp;
  }
  return pre;
};

// Do not edit below this line
module.exports = fibonacci;
