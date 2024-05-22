function sum(a, b, c) {
    // array like object
    const args = arguments;
    console.log(args);
    // array
    const args2 = [...arguments];
    console.log(args2);
    const result = a + b + c;
    return result;
}
const total = sum(45, 50, 30, 47, 52);
console.log(total);