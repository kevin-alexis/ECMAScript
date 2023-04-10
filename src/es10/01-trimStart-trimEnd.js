const hello = "               Hello World!      ";

//removes existing leading spaces
//leading : principal
console.log(hello.trimStart());

//remove existing trailing spaces
//trailing : arrastrando
console.log(hello.trimEnd());


console.log(hello.trimStart().trimEnd());