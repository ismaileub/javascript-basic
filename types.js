//In JavaScript, data types are categorized into two main types: primitive and non-primitive (also known as reference types)

/*
******* Primitive Types *******

Primitive types are the most basic data types. They are immutable, meaning their values cannot be changed once created. Operations on primitive types return new values and do not modify the original value. There are six primitive types in JavaScript:

1.Number: Represents both integer and floating-point numbers.

let age = 25;
let price = 19.99;

2.String: Represents a sequence of characters.

let name = "Alice";
let greeting = 'Hello, world!';

3.Boolean: Represents true or false.

let isLoggedIn = true;
let hasPermission = false;

4.Undefined: Represents a variable that has been declared but not assigned a value.

let x;
console.log(x); // Output: undefined

5.Represents the intentional absence of any object value.

let y = null;

6.let sym = Symbol('description');

7.BigInt: Represents whole numbers larger than the largest number JavaScript can reliably represent with the Number type.

let bigInt = 1234567890123456789012345678901234567890n;



*/


/*
********** Non-Primitive Types   *********


Non-primitive types, also known as reference types, include objects. These types are mutable and can be modified after creation. Variables of non-primitive types hold references to their values rather than the values themselves. The main non-primitive types in JavaScript are:

1.Object:
A collection of properties, where each property is defined as a key-value pair.

let person = {
    name: "Alice",
    age: 30
};

2.Array:
A special type of object used for storing ordered collections of values.
let numbers = [1, 2, 3, 4, 5];

3.Function:
Another special type of object that can be invoked to perform tasks.

function greet(name) {
    return `Hello, ${name}!`;
}



*/

/**
Key Differences

->Mutability:

  *Primitive types are immutable.
  *Non-primitive types (objects) are mutable.

->Memory Allocation:

  *Primitive values are stored directly in the location the variable accesses (stack).
  *Non-primitive values are stored in the heap, and the variable holds a reference to the location.


->Passing by Value vs. Reference:

  *Primitive types are passed by value. When you assign or pass a primitive value, a copy of the value is created.
  *Non-primitive types are passed by reference. When you assign or pass an object, a reference to the same object in memory is created. 

 */

// Primitive Type Example
let a = 10;
let b = a; // Copy of 'a' is assigned to 'b'
a = 20;
console.log(a); // Output: 20
console.log(b); // Output: 10 (remains unchanged)

// Non-Primitive Type Example
let obj1 = { name: "Alice" };
let obj2 = obj1; // Reference to the same object
obj1.name = "Bob";
console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob (reflects the change)
