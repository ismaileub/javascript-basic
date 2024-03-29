function array(numbers){
    console.log(numbers);
    
}

  array([2, 5, 10, 15, 100, 5,15]);


/**************/

function arrayLength(arr) {
    const len = arr.length;
    return len;
}

const myArray = [25, 30,  41, 55, 15];
console.log(arrayLength(myArray));


function arr(numbers){
  let  sum=0;
  for(const number of numbers)
  {
    sum = sum + number;
  }
  return sum;

}

const nums  = [10, 20, 30, 40 ,50];
const sum = arr(nums);
console.log('Sum of numbers ',sum);

