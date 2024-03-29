//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array


const numbers = [1, 2, 3, 4, 5];


function doubleNumber(number) {
  return number * 2;
}


const doubledNumbers = numbers.map(doubleNumber);   
 //const doubledNumbers = numbers.map((num) => num * 2);


console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
