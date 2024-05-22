//default value for num
function add(num1 = 0, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
//const sum = add(5, 7);
const sum = add(7);
console.log(sum);

//default value for string
function fullName(first, last = '') {
    const full = first + ' ' + last;
    return full;
}

//default value for array
function friends(numbers = []) {

}

//default value for object
function person(numbers = {}) {

}
