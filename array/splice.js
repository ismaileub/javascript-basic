/*
splice(start, deleteCount, element1, element2)
 */

var numbers = [1, 2, 10, 15, 20, 25, 30];
numbers.splice(0, 2)  //print all value of the array without particular index's value.
console.log(numbers);

numbers.splice(0, 2, 40, 50);
console.log(numbers);

numbers.splice(3, 0, 40);
console.log(numbers);

/* console.log(numbers.splice(0, 2))  */