/* One way */
const numbers = [10,20,30,40,50];

// console.log(numbers)   
// numbers.reverse();            reverse function changed the main array
// [...numbers].reverse();       it copy the main array
// console.log(numbers)

/*Another way */
const rev_number = [];
for(const num of numbers){
    // rev_number.push(num);
    rev_number.unshift(num);
}
// console.log(rev_number)

/*Another way */
const reversed_numbers = [];
for(let i=0; i<numbers.length; i++){
    /*const num = numbers[i];
    reversed_numbers.unshift(num);*/
    reversed_numbers.unshift(numbers[i]);
}
// console.log(reversed_numbers)

/*Another way */
const rev_num = [];
for(let i=numbers.length-1; i>=0; i--){
    // console.log(numbers[i]);
    rev_num.push(numbers[i]);

}
// console.log(rev_num)



