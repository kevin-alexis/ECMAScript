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
    .catch(error => console.log(error));





//Await and Async
const getUsers = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json(); 
    return json
}
// Call the getUsers function and log the response
getUsers().then(response => console.log(response))   