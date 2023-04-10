//Arrow functions

function square1(num){ //Square = Cuadrado
    return num * num;
}

//In an arrow funtion you can use let, var and const, but it is recommended to use const over the others

const square2 = (num) =>{
    return num * num;
}

//If only have an argument, you can delete the parenthesis
//and, if you only have a line of code, you can delete the keys
const square3 = num => num * num;

console.log(square1(2));
console.log(square2(3));
console.log(square3(4));

