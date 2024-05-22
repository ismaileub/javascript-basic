const actor = {
    name: 'ananto',
    phone: '01725987422',
    age: 30
}
// if right side is an object left side of destructuring object as well
//use property name as variable that contains the property value
const { name, age } = actor;
//onst { name, age: boyos } = actor;

//const name = actor.name;
//const age = actor.age;

console.log(name);
console.log(age);
//console.log(boyos);


// array destructuring 
const numbers = [50, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

//
function double(a, b) {
    return [a * 2, b * 2];
}
const [num1, num2] = double(6, 9);
console.log(num1, num2);