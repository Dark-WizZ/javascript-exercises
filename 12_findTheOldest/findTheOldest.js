const findTheOldest = function(arr) {
  let older = arr[0];
  for(let person of arr){
    if(person.yearOfDeath==undefined){
      person.yearOfDeath = new Date().getFullYear();
    }
    if((person.yearOfDeath-person.yearOfBirth)>(older.yearOfDeath-older.yearOfBirth)){
      older = person;
    }
  }
  return older;
};

// Do not edit below this line
module.exports = findTheOldest;
