
/* const data = [
    {
        id: 1,
        name: "BMW",
        year: 1995
        
    }, 
    {
        id: 2,
        name: "Honda",
        year: 1995
    },
    {
        id: 1,
        name: "Mustang",
        year: 1995
    }
] */

const data = []

//Promise

/* const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data);
    }, 1500);
    });
} */

//promise with error
const getData = () => {
    return new Promise((resolve, reject) => {
        if(data.length === 0){
            reject(new Error("No existen datos"));
        }
        setTimeout(() => {
        resolve(data);
    }, 1500);
    });
}

/* getData().then((data) => console.log(data)); */


//Async and away

//wait for the data
async function fetchingData(){
    try{
        const dataFetched = await getData();
        console.log(dataFetched);
    } catch(error) {
        console.log(error);
    }
}

fetchingData();


/* test

const getData = () =>{
    return data;
}

console.log(getData()); */


/* Does not return something because the time is out when the program get the value

const getData = () =>{
    setTimeout(()=>{
        return data
    },1500)
}

console.log(getData()); */