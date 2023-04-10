//String padding

const string = "Hello";



console.log(string.padStart(6, "_"));
console.log(string.padEnd(6, "_"));

//In the first have 5 for "hello" + 1 for "_"
//In the end have 6 for "_hello" + 1 for "_"
console.log(string.padStart(6, "_").padEnd(7, "_"));