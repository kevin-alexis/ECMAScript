//classes

//declarating a class
class User {};

//instantiating a class
/* const Kevin = new User(); */


class user {

    //methods
    greeting(){
        return "Hello";
    }
};

const Kevin = new user();
console.log( Kevin.greeting() );

const Alexis = new user();
console.log(Alexis.greeting());

//constructor, is the same word in spanish

class user {
    //Constructor
    constructor(){
        console.log("Nuevo usuario")
    }

    //methods
    greeting(){
        return "Hello";
    }
}

const Alex = new user();


// this, does a reference to the father element


class user{
    constructor(name){
        this.name = name   
    }
    //methods
    speak(){
        return "Hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const Kev = new user("alex");
console.log(Kev.greeting())


//setters and getter

class user {
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    //methods
    speak(){
        return "Hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n
    }
}

const Keven = new user("Kevin", 18)
console.log(Keven.uAge);
console.log(Keven.uAge = 20);