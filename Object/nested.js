const college = {
    name: 'CPMGC',
    class: ['11', '12'],
    event: ['science fair', '16 Dec', '21 Feb'],
    unique: {
        color: 'Blue',
        result: {
            gpa: 5,
            Merit: 'top'
        }
    }
}
// console.log(college)
// console.log(college.unique)
// console.log(college.unique.color)

college.unique.result= 'top most';
college.event[1] = 'Victory Day';

console.log(college.unique.result['Merit'])

