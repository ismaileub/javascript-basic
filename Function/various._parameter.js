function stringSized(str){
const size = str.length;
console.log(str, size);
if(size%2===0){
    console.log('even size');
    return true;
}
else{
    console.log('odd size');
    return false;
}
}

stringSized('Dhaka');
stringSized('Noakhali');

/**************/

function doubleOrTriple(number, doDouble){
    if(doDouble===true){
        const result = number*2;
        return result;
    }
    else{
        const result = number*3;
        return result;
    }
}

console.log(doubleOrTriple(5,true));
console.log(doubleOrTriple(5,false));


/**** object ****/

function getAge(person){
    const age = person.age;
    return  age;

}
