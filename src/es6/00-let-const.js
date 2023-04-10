//Declare and initialize var variable
var lastName = "Kevin";

//Reassign a value
lastName = "Alexis";

//Display de value of the var variable
console.log(lastName);




//Declare and initialize a let variable
let fruit = "Apple";

//Reassign
fruit = "Kiwi";

//Display the value of the let variable
console.log(fruit);







//Declare and initialize a constant variable
const animal = "Dog";

// Attempt to reassign a value to a constant variable (will produce an error)
animal = "Cat";

// Display the value of the constant variable
console.log(animal);




const fruits = () =>{
    if(true){
        var fruit1 = "Apple"; // Function scope, exist in global mode
        let fruit2 = "Kiwi"; // block scope, only exist in a block of code
        const fruit3 = "Banana"; // block scope, only exist in a block of code
        
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();