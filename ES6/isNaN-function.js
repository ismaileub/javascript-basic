console.log(isNaN(123));        // false (123 is a number)
console.log(isNaN('123'));      // false ('123' can be converted to 123)
console.log(isNaN('123abc'));   // true ('123abc' cannot be converted to a number)
console.log(isNaN(NaN));        // true (NaN is, by definition, Not-a-Number)
console.log(isNaN(undefined));  // true (undefined cannot be converted to a number)
console.log(isNaN(null));       // false (null can be converted to 0)
console.log(isNaN(''));         // false (empty string can be converted to 0)
console.log(isNaN(true));       // false (true can be converted to 1)
console.log(isNaN(false));      // false (false can be converted to 0)


/**The Number.isNaN() method is more reliable because it does not convert the value to a number before checking if it's NaN. It returns true only if the value is NaN and its type is Number. */




console.log(Number.isNaN(123));        // false (123 is a number)
console.log(Number.isNaN('123'));      // false ('123' is not NaN)
console.log(Number.isNaN('123abc'));   // false ('123abc' is not NaN)
console.log(Number.isNaN(NaN));        // true (NaN is, by definition, Not-a-Number)
console.log(Number.isNaN(undefined));  // false (undefined is not NaN)
console.log(Number.isNaN(null));       // false (null is not NaN)
console.log(Number.isNaN(''));         // false (empty string is not NaN)
console.log(Number.isNaN(true));       // false (true is not NaN)
console.log(Number.isNaN(false));      // false (false is not NaN)
