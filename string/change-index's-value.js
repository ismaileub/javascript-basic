const str = "Hello";
str[0] = "h";

console.log(str);

/*In JavaScript, strings are immutable, meaning you cannot change the characters in a string once it's been created. When you attempt to modify a character at a specific index in a string using the bracket notation ([]), as in str[0] = "h";, it does not actually modify the string. Instead, it tries to do the operation, but silently fails. Therefore, the original string "Hello" remains unchanged, and "Hello" will be logged to the console.*/


