//Rest operator

const user = { username: "Kevin", age: 18, country: "MX"};

const {username, ...values } = user;

//The first element is assigned to username variable
console.log(username);

//The rest of elements is assigned to values variable
console.log(values);
