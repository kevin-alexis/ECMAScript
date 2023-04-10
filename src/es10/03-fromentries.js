
const entries2 = new Map([["name", "Kevin"], ["age", 18]]);

console.log(entries);

//Transform the map output to a 
console.log(Object.fromEntries(entries));



// Now we can change the array to an object
// Ahora se puede cambiar de un array a un objeto
const entries = [
    ["name", "Sime"],
    ["age", 30],
  ];
  console.log("Array original", entries);
  // Original array
  // Array original [ [ 'name', 'Sime' ], [ 'age', 30 ] ]
  console.log("Array transformado a object", Object.fromEntries(entries));
  // array transformed to object
  // Array transformado a object { name: 'Sime', age: 30 }