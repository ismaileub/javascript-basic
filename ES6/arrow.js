//*function declaration*/
function add(a, b) {
    const result = a + b;
    return result;
}

function add(a, b) {
    return a + b;
}


/* function expression */
const add2 = function (a, b) {
    return a + b;
}
//const sum = add2(5, 10);
//console.log(sum);

/********************** */
/**arrow function */
const add3 = (a, b) => a + b;
const multiply = (a, b) => a * b;

const sum = add3(20, 30);
const mul = multiply(20, 30);
console.log(mul);



