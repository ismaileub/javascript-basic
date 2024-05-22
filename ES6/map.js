const numbers = [3, 5, 4, 8, 6];
/*****  1    *****/
// const doubled = [];
// for (const number of numbers) {
//     const double = number * 2;
//     doubled.push(double);
// }
// console.log(doubled);


// map ==>  loops through each element of the array and do the operation  that you passed in the callback function and hold result from each operation in an array and finally  returns you the array 

/*****  2    *****/

function doubleIt(num) {
    return num * 2;
}
const result = numbers.map(doubleIt);
//console.log(result);

/*****  3    *****/

const double2 = n => n * 2;

const output = numbers.map(double2);
const output2 = numbers.map(n => n * 2);
console.log(output);
console.log(output2);