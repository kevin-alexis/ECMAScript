const promise1 = new Promise ((resolve, reject)=> reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));


//Only resolve itself, if the promises in the array are resolved
Promise.all([promise2, promise3])
.then(response => console.log(response));


//It is solved although several not all solve
//Se resuelve aunque varias no todas resuelvan
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

