//enhanced object literals : literales de objetos mejorados

/* function newUser(user, age, country){
    return {
        user: user,
        age: age,
        country: country
    }
} */

//The best way, if the param and the variable are the same
function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Kevin", 18, "MX", 1));