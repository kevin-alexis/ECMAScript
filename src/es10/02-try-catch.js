//Error message
try{
    hello();
} catch (error) {
    console.log(error);
}


//Customized message
try{
    anotherFunction();
} catch {
    console.log("Esto es un error");
}