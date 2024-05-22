//filter selects elements based on condition and return an array with the elements that fulfilled the condition .
const numbers = [3, 5, 4, 7];
const players = [65, 72, 60, 55, 59];

//const selected = players.filter(p => p > 60);
//const selected = players.filter(p => p > 55);
//const selected = players.filter(p => p > 80);
const selected = players.filter(p => p % 2 === 1);
console.log(selected);


const friends = ['Tom', 'jhon', 'Micheal', 'Olever'];
const oddFriends = friends.filter(frnd => frnd.length > 4);
console.log(oddFriends);

/* 
-->Filter Function Behavior
When using filter(n => n % 2), the filter function keeps elements that return a truthy value when passed to the callback function. Since n % 2 returns 1 (truthy) for odd numbers and 0 (falsy) for even numbers, the filter function effectively filters out even numbers and keeps odd numbers.
 */

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
//let output = nums.filter(n => n % 2 === 1);

console.log(output); // Output: [1, 3, 5]
