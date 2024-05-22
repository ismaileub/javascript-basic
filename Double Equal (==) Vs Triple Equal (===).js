
/*
== (Loose Equality)
The == operator, also known as loose equality, checks for equality between two values after performing type coercion if necessary. Type coercion is the process of converting one value to another type to perform the comparison.
*/

const first = 2;
const second = '2';
if (first == second) {
    console.log('Values are equal');
}
else {
    console.log('Values are not equal');
}

console.log(5 == '5'); // Output: true
// The string '5' is coerced to the number 5 before comparison.

console.log(0 == false); // Output: true
// The boolean false is coerced to the number 0 before comparison.

console.log(null == undefined); // Output: true
// null and undefined are considered equal in loose equality.

console.log([] == false); // Output: true
// The empty array is coerced to an empty string, then to 0, and false is coerced to 0.

/****************************************************/

/*
=== (Strict Equality)
The === operator, also known as strict equality, checks for equality without performing type coercion. It compares both the value and the type of the two values.
*/

const a = 2;
const b = '2';
if (a === b) {
    console.log('Values are equal');
}
else {
    console.log('Values are not equal');
}

console.log(5 === '5'); // Output: false
// No type coercion; the number 5 is not the same type as the string '5'.

console.log(0 === false); // Output: false
// No type coercion; the number 0 is not the same type as the boolean false.

console.log(null === undefined); // Output: false
// No type coercion; null and undefined are different types.

console.log([] === false); // Output: false
// No type coercion; the empty array is not the same type as the boolean false.

