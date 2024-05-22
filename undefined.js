/**
 8 ways to get undefined 
 1. the variable that is not initialized will give undefined 
 2. function with no return 
 3. parameter that is not passed will be undefined
 4. if return has nothing on right side will return undefined
 5. property that does't exists on an object will give undefined 
 6. accessing array element outside of the index range 
 7. deleting an element inside an array
 8. set a value directly to undefined 

 */

let first;
// console.log(first);

function second(a, b) {
    const total = a + b;
}
const sum = second();
// console.log(sum);


const eight = undefined;
const eight1 = null;

const data = { results: [], updated: null };

console.log(typeof undefined);
console.log(typeof null);




