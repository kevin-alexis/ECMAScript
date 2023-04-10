//rest spread : descanso esparcido      AND assignation-the-destructuring


//Arrays destructuring - Set Array values on let values
let fruits = ["Apple", "Banana"];
let[a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring - Set Objet values on let values
let user = { username:"Kevin", age:18 };
let { username, age } = user
console.log(username, user.age);




//spread operator (...) - gets all the elements of the variable
let person = { name: "Kevin", age: 18};
let country = "MX";
let data = {id:1, ...person, country}
console.log(data);


//rest
function sum(num, ...values){
    console.log(values);
    console.log(num);
    console.log(num + values[0]);
}

sum(1, 1, 2, 3);

//peculiar example
//Finaly, the emojis com
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)
