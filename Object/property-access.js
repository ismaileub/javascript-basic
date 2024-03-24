const person = {
    name : "Ismail Hossain",
    age : 22,
    profession : 'IT student',
    salary : 0,
    isMarried : false,
    'friends name' : ['Shuvo', 'Nahid']
}
// how to access the property of any Object
// 1. dot Notation
console.log(person)
console.log(person.profession)

const income = person.salary;
console.log(income)

// 2.bracket Notation
console.log(person['age'])
const old = person['age'];
console.log(old)

/****************/
console.log(person["friends name"])
// 3.......
const key = 'profession';
console.log(person[key])