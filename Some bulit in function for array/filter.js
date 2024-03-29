//The filter() method creates a new array filled with elements that pass certain condition provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

// Define an array of objects representing students
const students = [
    { name: 'Alice', age: 22, gender: 'female' },
    { name: 'Bob', age: 20, gender: 'male' },
    { name: 'Charlie', age: 25, gender: 'male' },
    { name: 'Diana', age: 21, gender: 'female' },
    { name: 'Eve', age: 23, gender: 'female' }
];


const femaleStudents = students.filter(student => student.gender === 'female');


console.log("Female students:");
console.log(femaleStudents);


const studentsOlderThan21 = students.filter(student => student.age > 21);


console.log("\nStudents older than 21:");
console.log(studentsOlderThan21);

/******************/

const numbers = [1, 2, 3, 4, 5];

//const filteredNumbers = numbers.filter((num) => num % 2 === 0);

function isEven(number) {
    return number % 2 === 0;
}

const filteredNumbers = numbers.filter(isEven);

console.log(filteredNumbers); // Output: [2, 4]

