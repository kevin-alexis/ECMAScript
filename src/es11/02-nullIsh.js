//Operator nullish coalescing (??)
//That operator evaluates a variable, if is undefined or null

const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate);

//if the value is null, the operator sets a default value
const anotherNumber2 = null;
const validate2 = anotherNumber2 ?? 5;
console.log(validate2);