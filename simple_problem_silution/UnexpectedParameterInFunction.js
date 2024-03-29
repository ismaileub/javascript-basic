
function sum(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number')
    return 'Please provide a number';
    return num1+num2;
}

const  result = sum(5, 7);
console.log(result);

function getSecond(numbers){
    if(Array.isArray(numbers)=== false){
        return 'Please provide  an array';
    }
    return numbers[1];

}

//const second = getSecond(45);
const second = getSecond([2, 3, 4, 5, 10]);
console.log(second);

