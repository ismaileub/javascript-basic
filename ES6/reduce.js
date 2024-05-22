const numbers = [5, 10, 12, 8, 3];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);
