
const number = '400';

if(typeof number === 'number'){
    console.log('the valu is a Number')
}
else{
    console.log('the valu is not a Number')
}

const student = [ 40 , 50 , 59, 60,30]
const studentName = { name: 'Durjoy', semester : '6th'}
console.log(Array.isArray(studentName));
console.log(Array.isArray(student));
// console.log(typeof studentName);