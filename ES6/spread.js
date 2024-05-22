const max = Math.max(10, 8, 15, 13, 20);
// console.log(max);
const numbers = [5, 1, 6, 15, 25, 19, 21, 16];
//const arrayMax = Math.max(numbers);  /* not working */
const arrayMax = Math.max(...numbers);
console.log(arrayMax);


const nums1 = [10, 20, 30, 40, 50];
const num = [35];
const nums2 = nums1;   /*it add reference to the new array*/
nums2.push(5);  /* 5 added in nums1 & nums2 */
const nums3 = [...nums1]  /*only copy*/

nums3.push(15); /* 15 added only in nums3*/
const nums4 = [...nums1, 60, 70, ...num]; /*add extra element while copy*/
console.log(nums4);

