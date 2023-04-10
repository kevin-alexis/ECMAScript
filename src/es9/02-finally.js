const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve ("Se logró :)");
        } else{
            reject("No se logró :(");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finally!"));

