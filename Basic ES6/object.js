const person = {
    name : 'Durjoy Chandra Barman',
    Age  : 20,
    DEPT : 'Computer'
}

Object.freeze(person)
// Object.seal(person)

person.Age = 30;
// person.status = 'Student'

// console.log(Object.keys(person))
// console.log(Object.values(person))
console.log(Object.entries(person))