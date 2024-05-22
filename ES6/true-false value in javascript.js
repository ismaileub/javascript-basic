
/*
Understanding n % 2
n % 2 computes the remainder when n is divided by 2.
For odd numbers, n % 2 evaluates to 1, which is a truthy value in JavaScript.
For even numbers, n % 2 evaluates to 0, which is a falsy value in JavaScript.
Truthy and Falsy in JavaScript
In JavaScript:

Truthy values are values that evaluate to true in a Boolean context.

 Examples include 1, "non-empty string", {}, [], etc.

Falsy values are values that evaluate to false in a Boolean context. 
Examples include 0, "" (empty string), null, undefined, NaN, and false.

*/


const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
//let output = nums.filter(n => n % 2 === 1);

console.log(output); // Output: [1, 3, 5]