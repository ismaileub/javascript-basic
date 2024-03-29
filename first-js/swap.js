//1.Using a temporary variable
let a = 5;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log("a =", a); // Output: 10
console.log("b =", b); // Output: 5

//2.Using array destructuring:


temp = a;
a = b;
b = temp;

console.log("a =", a); // Output: 10
console.log("b =", b); // Output: 5

let p = 5;
let q = 'hello';

[p, q] = [q, p]; // Swap values of a and b using destructuring

console.log(p); // Output: 'hello'
console.log(q); // Output: 5



//3.Using arithmetic operations (addition and subtraction)


a = a + b;
b = a - b;
a = a - b;

console.log("a =", a); // Output: 10
console.log("b =", b); // Output: 5

//4.Using bitwise XOR operation


a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a =", a); // Output: 10
console.log("b =", b); // Output: 5

//5.creating own swap function
function swap(a, b) {
    return [b, a];
}

let x = 5;
let y = 10;
[x, y] = swap(x, y);

console.log("x =", x); // Output: 10
console.log("y =", y); // Output: 5


