const person = {
    name: 'kodom ali',
    age: 21,
    3: 'third',
    'add-dress': 'shahbag'
};
console.log(person.name);
// console.log(person[age]);    //wrong syntax
// console.log(person.3);    //wrong syntax

console.log(person['age']);
//  or
const prop = 'age';
console.log(person[prop]);
console.log(person[3]);
//console.log(person.add-dress);   //wrong syntax
console.log(person["add-dress"]);
