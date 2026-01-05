// JavaScript এ indexOf হলো একটি মেথড যেটা string বা array–এর ভিতরে কোনো মান (letter/word/number)
// কোন অবস্থানে আছে সেটা খুঁজে বের করে।

// সহজভাবে

// মান পেলে কোন নম্বর পজিশনে আছে সেটা বলে।

// না পেলে -1 দেয়।

/**                1         2          3       4      5    */

const myName = ['Durjoy', 'chandra', 'barman','roy','bijoy']
// console.log(myName.indexOf('roy')); /**output 5 karon ? roy  er age aro 3 ti word ace */
console.log(myName.indexOf('bijoy')); /** output 4 karon bijoy er age  'Durjoy', 'chandra', 'barman','roy'  3 ti upadan ace  */

console.log(myName.indexOf('papo')) /** output -1 karon myname a papo name kono upadan nai */