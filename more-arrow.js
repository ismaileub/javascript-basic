const difference = (x, y) => x + y;
const multiply = (first, second, third) => first * second * third;
/** single parameter */
const getAge = (person) => person.age;
const student = { name: 'Ismail Hossain', age: 9 };
const age = getAge(student);
console.log(age);

const double = num => num * 2;

const getThird = numbers => numbers[2];  /*without first backet*/
//const getThird = (numbers) => numbers[2];
const third = getThird([5, 10, 15, 250, 30]);
console.log(third);

/*** no parameter  ***/
const getPI = () => Math.PI;
console.log(getPI());

/*** large arrow function */
// if you want to get anything  returned from this function , then you have to use return keyword 

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}

