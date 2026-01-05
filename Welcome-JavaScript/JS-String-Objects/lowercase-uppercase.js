let school = 'Shimulguri Govt Primary school'

console.log(school)
console.log(school.toLowerCase()); /**toLowerCase diye kono string er sob upadha ke shoto hand er kora jay  */
console.log( school.toUpperCase()) /**touppercase diye kono striung er sob upadan ke bro hand er kora jay */

let subject = 'Biology'
let book = 'biology'
// akhane Biology er banan er mordha parthoko ace  
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('amer exam a question komon porse ami a+ pabo');
}
else{
    console.log( 'amer exam a question komon pore nai ami a+ pabo na ')
}
