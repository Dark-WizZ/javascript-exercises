const caesar = function(str, inc) {
  let res = '';
  inc = inc%26;
  for(let i=0; i<str.length; i++){
    if(/\W/.test(str.charAt(i))){
      res += str.charAt(i);
    }else{
      let code = str.charCodeAt(i)+inc;
      if(code-inc>=65 && code-inc<=90){
        if(code>90){
          code = 64+(code-90)
        }
        if(code<65){
          code = 91-(65-code)
        }
      }
      if(code-inc>=97 && code-inc<=122){
        if(code>122){
          code = 96+(code-122)
        }
        if(code<96){
          code = 123-(96-code)
        }
      }
      res += String.fromCharCode(code);
    }
  }
  return res;
};

// Do not edit below this line
module.exports = caesar;
