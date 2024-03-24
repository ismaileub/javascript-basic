const person = {
    name : "Ismail Hossain",
    age : 22,
    profession : 'IT student',
    salary : 0,
    isMarried : false,
    'friends name' : ['Shuvo', 'Nahid']
}

person.salary = 1; 
person['age'] = 23; 
person['friends name'] = ['Shakib', 'Hridoy'];

console.log(person)

const key = 'profession';
person[key] = 'computer science student ';

console.log(person)
