/**
 *📌Template String কী? 

Template String হলো backtick ( ) ব্যবহার করে লেখা string।
এটার সবচেয়ে বড় সুবিধা:

ভেতরে variable বসানো যায়

multiple line লেখা যায়

string লেখা অনেক সহজ হয়
 */
// const anthem = `Amer sonar bangla 
// ami tomoy valo bashi
// chrodin tumer akash 
// chirodin tumer batas`
// console.log(anthem)

const bangla = 'bangla'
const love = 'valobashi'

const anthem2 = `amar sonar ${bangla} ami tomay ${love}`
console.log(anthem2)