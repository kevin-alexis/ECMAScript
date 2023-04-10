
//The two methods are "inmutables", that is it, returns a new "array" with the changes, but does not change the original array

//flat
//Returns an array where subarrays have been recursively flattened to a specified depth
const array = [1, 1, 2, 3, 4, [ 1, 3, 5, 6, [1 , 2, 4]]]
console.log(array.flat(3));

//flat map
// First, does the iteration of the elements to the array (how it were "map"), and after flats to an only depth
//Primero realiza la iteración de los elementos del `array` (como si fuera `map`), y después los aplana en una sola profundidad (como si fuera `flat`).

const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(value => [value, value * 2]));