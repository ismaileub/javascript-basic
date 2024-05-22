const friends = ['Ismail', 'Shuvo', 'Shakib', 'Hridoy', 'Nahid'];
const num = [];
const food = 'apple, orange';

console.log(Array.isArray(friends));
console.log(Array.isArray(num));
console.log(Array.isArray(food));

if(!Array.isArray(food)){
    console.log('This is not an array');
}