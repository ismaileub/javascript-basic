const person = ['rakib', 'nokib', 'shakib', 'akib','Akib'];
const shortedPerson = person.sort();
console.log(shortedPerson)

//short-->
//Ascending --->smaller to larger
//Descending --->larger to smaller

const numbers = [2, 3, 12, 33, 7, 9];
//const numbers_asc = numbers.sort(); //not working properly

const numbers_asc = numbers.sort(function(a,b) {return a - b});
const numbers_dsc = numbers.sort(function(a,b) {return b - a}); //it is not working because short function changed the main array


const numbers_ascending = [...numbers].sort(function(a,b) {return a - b});
const numbers_descending = [...numbers].sort(function(a,b) {return b - a});



console.log(numbers_ascending)
console.log(numbers_descending)
