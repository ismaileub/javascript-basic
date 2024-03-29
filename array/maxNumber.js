const numbers = [10, 5, 8, 20, 15];

const maxNumber = Math.max(...numbers);

console.log("The maximum number in the array is:", maxNumber);

//Passing an array directly: Without using ..., if we pass an array directly to Math.max, it will treat the array as a single argument, not as individual numbers. For example:

const max_Number = Math.max(numbers); // This won't work as expected
//This will result in NaN (Not a Number) because Math.max doesn't know how to handle an array as a single argument.
