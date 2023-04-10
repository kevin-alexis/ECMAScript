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

    //setters and getter

    //# represents the private function

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age = n
    }
}

const Keven = new user("Kevin", 18)
console.log(Keven.uAge);
console.log(Keven.uAge = 20);