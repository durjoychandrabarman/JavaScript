const about = {
    name : 'Durjoy',
    Dept : 'Computer',
    Age  : 20,
}
// const name = about.name;
// const dept = about.Dept;
// const Age = about.Age;

const { name, Dept ,Age } = about;
// console.log(about)

const person = ['Dev','Ankush','Ram',{name : 'durjoy'},'Radhaka'];
// console.log(person[2]);
const [magaStar , nayok , tamilNayok, myName , Naika] = person;
console.log(myName);