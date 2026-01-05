/**
 * JavaScript-এ return হলো function-এর ভেতর থেকে কোনো মান (value) 
 * বাইরে পাঠানোর জন্য ব্যবহৃত একটি keyword। 
 * সহজ ভাষায়:
👉 return = function যে result দেয়
👉 function কল করলে তুমি যে value পাবে, সেটা return এর মাধ্যমেই বের হয়।

📌 কেন return ব্যবহার করা হয়?
function থেকে result বের করে অন্য জায়গায় ব্যবহার করতে

হিসাব-নিকাশ বা ডাটা প্রসেস করে output দিতে

function এখানেই stop করতে (return দিলে function আর নিচে যাবে না)
*/
// 📌 Simple Example
function tenTimes (number){
    const result = number * 10;
    return result;
}
tenTimes(10); /**📌ata kaj korbe na karon ata ke akti variable a rakth hobe */
const output = tenTimes(10);
console.log('output', output)

const bigNumber = tenTimes( 5);
console.log(bigNumber)