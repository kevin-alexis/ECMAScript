//Generator
//The generators have an * (asterisk), because that is a tag for reference the generator

function*  iterate(array) {
    for (let value of array) {
        //yield stops the execution and return the value
        yield value;
    }
}

const it = iterate(["Kevin", "Alexis", "Paola", "Diana"]);


console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


const it1 = iterate(["Body", "Terry", "Canela"]);

console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);










