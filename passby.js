// primitive types are pass by value
let num1 = 5;
let num2 = 10;
function sum(a, b) {
    a = 7;
    return;
}
console.log(num1);
sum(num1, num2);
console.log(num1);

/********************** */
//non-primitive (array, object)  types are pass by reference
let student = { name: 'jalil', partner: 'borsha' };
function makeMove(couple) {
    couple.name = 'Ononto';
}
console.log(student);
makeMove(student);
console.log(student);


