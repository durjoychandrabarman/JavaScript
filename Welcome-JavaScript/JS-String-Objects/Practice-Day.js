// string and string vs array 
// amra kivbe string declare korbo
/*
const country = 'bangladesh'
const desh = "India"
const divitions = `Panchagarh`
/*
/** aray and string er lenth  ber kora */
// const numbers = [ 12, 23, 45, 39, 38,45]
// console.log( numbers.length)
// console.log( numbers [3])
// numbers[0]=5000; /**array er index change hoy */
// console.log( numbers)
// const capital = 'Dhaka'
// console.log(capital.length)
// capital['f'] /**string er index change hoyna */
// console.log(capital)

/**Slice মানে সহজভাবে বললে একটা অংশ কেটে নেওয়া — কিন্তু মূল জিনিসটা পরিবর্তন না করে। */
// const favPlace = "Dinajpur Ram Krishna Mishon Mondir"
// console.log(favPlace.slice( 1 ,10))

/* Practice 4 */
// split হলো JavaScript-এর একটি string method, যেটা একটা string-কে ভেঙে (ভাগ করে) array তে রূপান্তর করে।
// split = string-কে ভেঙে array বানানো।
const myName = 'Durjoy chandra Barman'
console.log( myName.split(' '))
console.log(myName.split('a')) 

/* Practice 5 */
// join হলো JavaScript-এর একটি Array method, যেটা array-এর সব এলিমেন্টকে একসাথে জোড়া লাগিয়ে একটি string বানায়।
const myFriends = ['Durjoy','Chandra','Barman']
console.log( myFriends.join('|'))
console.log( myFriends.join('-->'))

/* Practice 6 */
// দুটি বা তার বেশি array-কে একসাথে যোগ করে নতুন array বানায়।
// মূল array পরিবর্তন হয় না।
// দুটি বা তার বেশি string জোড়া লাগে।
const firstName = 'Durjoy'
const lastName = 'Roy'
const fullName = firstName + (' ') + lastName; /**ai ta bangla niyom */
// console.log( fullName)
const fullName2 = firstName.concat(' ').concat(lastName);
console.log(fullName2)

/* Practice 7 */
// includes হলো JavaScript-এর একটি method যেটা array এবং string – দুটিতেই ব্যবহার করা যায়।
// এটার কাজ হলো কোনো মান আছে কি না সেটা true/false রিটার্ন করা।
console.log(lastName.includes('o'))
console.log(lastName.includes('p'))