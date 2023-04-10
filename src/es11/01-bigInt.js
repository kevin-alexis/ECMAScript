//the "n" is a representation of numbers
const aBigNumber = 897456126045689456n;

const aBigNumbers = 897456126045689456;

//The function BigInt requires the number to be passed as a string, because the constructor, does not understand real numbers
const anotherBigNumbera = BigInt("897456126045689456");

console.log(aBigNumber);
console.log(aBigNumbers);
console.log(anotherBigNumber);

