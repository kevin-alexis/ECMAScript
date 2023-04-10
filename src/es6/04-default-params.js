//Set default params

//In the past

function newUser(name, age, country) {
    var name = name || "Kevin";
    var age = age || 18;
    var country = country || "MX"
    console.log(name, age, country)
}

newUser();
newUser("Alexis", 21, "EUA");


//in the actuality
function newAdmin(name = "Kevin", age = 18, country = "MX"){
    console.log(name, age, country);
}

newAdmin();
newAdmin("Alexis", 21, "EUA");