function checkDuplicate(array){
    const unique = [];
    for(const item of array) {
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;

}

const num = [2, 3, 2, 5, 6, 7, 6, 1];
const number =  checkDuplicate(num);
console.log(number);